/**
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { createPlugin } from "@mapstore/utils/PluginsUtils";
import Cadastrapp from "./extensions/cadastrapp/plugins/Cadastrapp";

export default {
    plugins: {Cadastrapp: createPlugin('Cadastrapp', Cadastrapp)}
};
