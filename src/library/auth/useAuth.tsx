import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import parseURL from "url-parse";

import { accessTokenState } from "./useUser";

type AuthFunction = (page: React.ReactNode) => React.ReactNode;

export const useAuth: AuthFunction = (Page: FC) => (() => {
    const setAccessToken = useSetRecoilState(accessTokenState);

    const [loggedIn, setLoggedIn] = useState(0);
    const router = useRouter();

    useEffect(() => {
        if (process.browser) {
            const query = parseURL(location.href, true).query;

            let token = localStorage.getItem("@dh/token") || "";

            if (query["token"]) {
                setAccessToken({ token: query["token"] });
                token = query["token"];
                console.log("Updated token");
                location.replace(location.href.split("?")[0]);
                return;
            }

            if (token.length === 0) {
                router.push("/login?redirect_uri=" + encodeURIComponent(location.href));
                return;
            }

            setLoggedIn(1);
        }
    }, [loggedIn]);

    if (loggedIn == 0) {
        return <></>;
    }

    if (loggedIn == 1) {
        return <Page />;
    }
});