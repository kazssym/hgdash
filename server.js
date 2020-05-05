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

let {argv, exit} = require("process");
let express = require("express");

/**
 * Runs a server.
 *
 * @param {string[]} args command-line arguments
 * @return {Promise<number>} exit status
 */
function main(args)
{
    if (args == null) {
        args = [];
    }

    return new Promise(async (resolve, reject) =>
        {
            let app = express();
            app.get("/", (request, response) =>
                {
                    response.send("Hello\n");
                }
            );
            app.listen(3000);
        }
    );
}

module.exports = {
    main: main,
};

if (require.main === module) {
    main(argv.slice(2))
    .then((status) =>
        {
            exit(status)
        }
    );
}
