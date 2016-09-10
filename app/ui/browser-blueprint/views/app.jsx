/*
Copyright 2016 Mozilla

Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed
under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied. See the License for the
specific language governing permissions and limitations under the License.
*/

import React from 'react';

import Style from '../../shared/style';
import BrowserWindow from './window';

const APP_STYLE = Style.registerStyle({
  width: '100%',
  height: '100%',
});

const App = function() {
  const Element = Style.Element;
  return (
    <div className={APP_STYLE}>
      <BrowserWindow />
      <Element />
    </div>
  );
};

App.displayName = 'App';

export default Style.component(App);