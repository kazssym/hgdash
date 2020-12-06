// service.js
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
 * Service worker script.
 */

"use strict";

const CACHE_NAME = "20201206.1";

self.addEventListener("install", (event) => {
    let cachePrepared = caches.open(CACHE_NAME)
        .then((cache) => {
            return cache.addAll([
                "index.html",
                "resources/site.css",
                "resources/site-theme-default.css",
                "resources/decorate.js",
                "resources/app.js",
                "service.js",
            ]);
        });
    event.waitUntil(cachePrepared);
});
