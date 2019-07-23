import React from "react";
import { Helmet } from "react-helmet";
import { BOOTSTRAP_CDN_URL } from "../../constants";

export default function Head() {
  return (
    <Helmet>
      <link
        rel="stylesheet"
        href={BOOTSTRAP_CDN_URL}
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
    </Helmet>
  );
}
