/*
 * Vencord, a Discord client mod
 * Copyright (c) 2023 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { proxyLazy } from "@utils/lazy";
import { find, findByCodeLazy } from "@webpack";

export const create = findByCodeLazy("will be removed in v4");

export const persist = proxyLazy(() => {
    const res = find(m => m.persist?.toString().includes("zustand"));
    return res?.persist;
});
