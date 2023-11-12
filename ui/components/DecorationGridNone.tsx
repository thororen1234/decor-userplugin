/*
 * Vencord, a Discord client mod
 * Copyright (c) 2023 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { i18n, Text } from "@webpack/common";

import { NoEntrySignIcon } from "../../compat";
import { DecorationGridItem } from ".";

export default function DecorationGridNone(props: { isSelected, onSelect; className?: string; }) {
    return <DecorationGridItem
        {...props}
    >
        <NoEntrySignIcon />
        <Text
            variant="text-xs/normal"
            color="header-primary"
        >
            {i18n.Messages.NONE}
        </Text>
    </DecorationGridItem >;
}
