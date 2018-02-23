import React from 'react';
import ReactDOM from 'react-dom';

import { HeaderArea } from './components/HeaderArea';
import { SiteBrandingArea } from './components/SiteBrandingArea';
import { ProductBigTitleArea } from './components/ProductBigTitleArea';
import { SingleSideBarZone } from './components/SingleSideBarZone';
import { ProductContentAreaCheckout } from './components/ProductContentAreaCheckout';
import { FooterTopArea } from './components/FooterTopArea';
import { FooterBottomArea } from './components/FooterBottomArea';

ReactDOM.render(<HeaderArea/>, document.getElementById('HeaderArea'));
ReactDOM.render(<SiteBrandingArea/>, document.getElementById('SiteBrandingArea'));
ReactDOM.render(<ProductBigTitleArea/>, document.getElementById('ProductBigTitleArea'));
ReactDOM.render(<SingleSideBarZone/>, document.getElementById('SingleSideBarZone'));
ReactDOM.render(<ProductContentAreaCheckout/>, document.getElementById('ProductContentAreaCheckout'));
ReactDOM.render(<FooterTopArea/>, document.getElementById('FooterTopArea'));
ReactDOM.render(<FooterBottomArea/>, document.getElementById('FooterBottomArea'));