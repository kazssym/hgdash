// server.js
// Copyright (C) 2020 Kaz Nishimura
//
// This program is free software: you can redistribute it and/or modify it
// under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or (at your
// option) any later version.
//
// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
// FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License
// for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// SPDX-License-Identifier: AGPL-3.0-or-later

/**
 * Server module.
 *
 * @module server.js
 */

"use strict";

let {exit, argv, env} = require("process");
let {App} = require("./index.js");

/**
 * Runs a server.
 *
 * @param {string[]} args command-line arguments
 * @return {number} exit status
 */
async function main(args)
{
    if (args == null) {
        args = [];
    }

    // The listening port number is taken from the environment.
    let port = env["PORT"];

    let app = new App();
    if (port) {
        app.port = port;
    }
    await app.run();
    return 0;
}
module.exports.main = main;

main(argv.slice(2))
    .then((status) => {
        exit(status)
    })
    .catch((reason) => {
        console.error("%s", reason);
    });
