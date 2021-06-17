Object.defineProperty(exports,"__esModule",{value:true});exports.PLATFORM=undefined;var _color=require('color');var _color2=_interopRequireDefault(_color);var _reactNative=require('react-native');var _expoDevice=require('expo-device');var Device=_interopRequireWildcard(_expoDevice);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj.default=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var PLATFORM=exports.PLATFORM={ANDROID:'android',IOS:'ios',MATERIAL:'material',WEB:'web'};var deviceHeight=_reactNative.Dimensions.get('window').height;var deviceWidth=_reactNative.Dimensions.get('window').width;var platform=_reactNative.Platform.OS;var platformStyle=undefined;var isIphoneX=platform===PLATFORM.IOS&&Device.modelId.replace(/^\D+/g,'').split(",")[0]>=10;exports.default={platformStyle:platformStyle,platform:platform,headerStyle:'#edebed',iconStyle:'#000',contentStyle:'#f5f4f5',expandedIconStyle:'#000',accordionBorderColor:'#d3d3d3',disableRow:'#a9a9a9',elevation:4,containerTouchableBackgroundColor:'rgba(0,0,0,0.4)',innerTouchableBackgroundColor:'#fff',listItemHeight:50,listItemBorderColor:'transparent',marginHorizontal:-15,marginLeft:14,marginTop:15,minHeight:56,padding:15,touchableTextColor:'#757575',androidRipple:true,androidRippleColor:'rgba(256, 256, 256, 0.3)',androidRippleColorDark:'rgba(0, 0, 0, 0.15)',buttonUppercaseAndroidText:true,badgeBg:'#ED1727',badgeColor:'#fff',badgePadding:platform===PLATFORM.IOS?3:0,buttonFontFamily:platform===PLATFORM.IOS?'System':'Roboto_medium',buttonDisabledBg:'#b5b5b5',buttonPadding:6,get buttonPrimaryBg(){return this.brandPrimary;},get buttonPrimaryColor(){return this.inverseTextColor;},get buttonInfoBg(){return this.brandInfo;},get buttonInfoColor(){return this.inverseTextColor;},get buttonSuccessBg(){return this.brandSuccess;},get buttonSuccessColor(){return this.inverseTextColor;},get buttonDangerBg(){return this.brandDanger;},get buttonDangerColor(){return this.inverseTextColor;},get buttonWarningBg(){return this.brandWarning;},get buttonWarningColor(){return this.inverseTextColor;},get buttonTextSize(){return platform===PLATFORM.IOS?this.fontSizeBase*1.1:this.fontSizeBase-1;},get buttonTextSizeLarge(){return this.fontSizeBase*1.5;},get buttonTextSizeSmall(){return this.fontSizeBase*0.8;},get borderRadiusLarge(){return this.fontSizeBase*3.8;},get iconSizeLarge(){return this.iconFontSize*1.5;},get iconSizeSmall(){return this.iconFontSize*0.6;},cardDefaultBg:'#fff',cardBorderColor:'#ccc',cardBorderRadius:2,cardItemPadding:platform===PLATFORM.IOS?10:12,CheckboxRadius:platform===PLATFORM.IOS?13:0,CheckboxBorderWidth:platform===PLATFORM.IOS?1:2,CheckboxPaddingLeft:platform===PLATFORM.IOS?4:2,CheckboxPaddingBottom:platform===PLATFORM.IOS?0:5,CheckboxIconSize:platform===PLATFORM.IOS?19:16,CheckboxIconMarginTop:platform===PLATFORM.IOS?undefined:1,CheckboxFontSize:platform===PLATFORM.IOS?12/0.9:17,checkboxBgColor:'#039BE5',checkboxSize:20,checkboxTickColor:'#fff',brandPrimary:platform===PLATFORM.IOS?'#007aff':'#3F51B5',brandInfo:'#62B1F6',brandSuccess:'#5cb85c',brandDanger:'#d9534f',brandWarning:'#f0ad4e',brandDark:'#000',brandLight:'#a9a9a9',containerBgColor:'#fff',datePickerTextColor:'#000',datePickerBg:'transparent',fabWidth:56,DefaultFontSize:16,fontFamily:platform===PLATFORM.IOS?'System':'Roboto',fontSizeBase:15,get fontSizeH1(){return this.fontSizeBase*1.8;},get fontSizeH2(){return this.fontSizeBase*1.6;},get fontSizeH3(){return this.fontSizeBase*1.4;},footerHeight:55,footerDefaultBg:platform===PLATFORM.IOS?'#F8F8F8':'#3F51B5',footerPaddingBottom:0,tabBarTextColor:platform===PLATFORM.IOS?'#737373':'#bfc6ea',tabBarTextSize:platform===PLATFORM.IOS?14:11,activeTab:platform===PLATFORM.IOS?'#007aff':'#fff',sTabBarActiveTextColor:'#007aff',tabBarActiveTextColor:platform===PLATFORM.IOS?'#2874F0':'#fff',tabActiveBgColor:platform===PLATFORM.IOS?'#cde1f9':'#3F51B5',toolbarBtnColor:platform===PLATFORM.IOS?'#007aff':'#fff',toolbarDefaultBg:platform===PLATFORM.IOS?'#F8F8F8':'#3F51B5',toolbarHeight:platform===PLATFORM.IOS?64:56,toolbarSearchIconSize:platform===PLATFORM.IOS?20:23,toolbarInputColor:platform===PLATFORM.IOS?'#CECDD2':'#fff',searchBarHeight:platform===PLATFORM.IOS?30:40,searchBarInputHeight:platform===PLATFORM.IOS?30:50,toolbarBtnTextColor:platform===PLATFORM.IOS?'#007aff':'#fff',iosStatusbar:'dark-content',toolbarDefaultBorder:platform===PLATFORM.IOS?'#a7a6ab':'#3F51B5',get statusBarColor(){return(0,_color2.default)(this.toolbarDefaultBg).darken(0.2).hex();},get darkenHeader(){return(0,_color2.default)(this.tabBgColor).darken(0.03).hex();},iconFamily:'Ionicons',iconFontSize:platform===PLATFORM.IOS?30:28,iconHeaderSize:platform===PLATFORM.IOS?33:24,inputFontSize:17,inputBorderColor:'#D9D5DC',inputSuccessBorderColor:'#2b8339',inputErrorBorderColor:'#ed2f2f',inputHeightBase:50,get inputColor(){return this.textColor;},get inputColorPlaceholder(){return'#575757';},buttonLineHeight:19,lineHeightH1:32,lineHeightH2:27,lineHeightH3:25,lineHeight:platform===PLATFORM.IOS?20:24,listBg:'transparent',listBorderColor:'#c9c9c9',listDividerBg:'#f4f4f4',listBtnUnderlayColor:'#DDD',listItemPadding:platform===PLATFORM.IOS?10:12,listNoteColor:'#808080',listNoteSize:13,listItemSelected:platform===PLATFORM.IOS?'#007aff':'#3F51B5',defaultProgressColor:'#E4202D',inverseProgressColor:'#1A191B',radioBtnSize:platform===PLATFORM.IOS?25:23,radioSelectedColorAndroid:'#3F51B5',radioBtnLineHeight:platform===PLATFORM.IOS?29:24,get radioColor(){return this.brandPrimary;},segmentBackgroundColor:platform===PLATFORM.IOS?'#F8F8F8':'#3F51B5',segmentActiveBackgroundColor:platform===PLATFORM.IOS?'#007aff':'#fff',segmentTextColor:platform===PLATFORM.IOS?'#007aff':'#fff',segmentActiveTextColor:platform===PLATFORM.IOS?'#fff':'#3F51B5',segmentBorderColor:platform===PLATFORM.IOS?'#007aff':'#fff',segmentBorderColorMain:platform===PLATFORM.IOS?'#a7a6ab':'#3F51B5',defaultSpinnerColor:'#45D56E',inverseSpinnerColor:'#1A191B',tabDefaultBg:platform===PLATFORM.IOS?'#F8F8F8':'#3F51B5',topTabBarTextColor:platform===PLATFORM.IOS?'#6b6b6b':'#b3c7f9',topTabBarActiveTextColor:platform===PLATFORM.IOS?'#007aff':'#fff',topTabBarBorderColor:platform===PLATFORM.IOS?'#a7a6ab':'#fff',topTabBarActiveBorderColor:platform===PLATFORM.IOS?'#007aff':'#fff',tabBgColor:'#F8F8F8',tabFontSize:15,textColor:'#000',inverseTextColor:'#fff',noteFontSize:14,get defaultTextColor(){return this.textColor;},titleFontfamily:platform===PLATFORM.IOS?'System':'Roboto_medium',titleFontSize:platform===PLATFORM.IOS?17:19,subTitleFontSize:platform===PLATFORM.IOS?11:14,subtitleColor:platform===PLATFORM.IOS?'#000':'#fff',titleFontColor:platform===PLATFORM.IOS?'#000':'#fff',borderRadiusBase:platform===PLATFORM.IOS?5:2,borderWidth:1/_reactNative.PixelRatio.getPixelSizeForLayoutSize(1),contentPadding:10,dropdownLinkColor:'#414142',inputLineHeight:24,deviceWidth:deviceWidth,deviceHeight:deviceHeight,isIphoneX:isIphoneX,inputGroupRoundedBorderRadius:30,Inset:{portrait:{topInset:24,leftInset:0,rightInset:0,bottomInset:34},landscape:{topInset:0,leftInset:44,rightInset:44,bottomInset:21}}};
//# sourceMappingURL=commonColor.js.map