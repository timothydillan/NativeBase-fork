import { StyleProvider } from 'native-base-shoutem-theme';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Drawer from './basic/Drawer';
import { SwipeRow } from './basic/SwipeRow';
import { Text } from './basic/Text';
import { ViewNB as View } from './basic/View';
import { Button } from './basic/Button';
import { DatePicker } from './basic/DatePicker';
import { TabHeading } from './basic/TabHeading';
import { TabContainer } from './basic/TabContainer';
import { IconNB } from './basic/IconNB';
import { Icon } from './basic/Icon';
import { Header } from './basic/Header';
import { InputGroup } from './basic/InputGroup';
import { Input } from './basic/Input';
import { Title } from './basic/Title';
import { Fab } from './basic/Fab';
import { Left } from './basic/Left';
import { Right } from './basic/Right';
import { Body } from './basic/Body';
import { Badge } from './basic/Badge';
import { CheckBox } from './basic/Checkbox';
import { Radio } from './basic/Radio';
import { Thumbnail } from './basic/Thumbnail';
import { Card } from './basic/Card';
import { CardItem } from './basic/CardItem';
import { H1 } from './basic/H1';
import { H2 } from './basic/H2';
import { H3 } from './basic/H3';
import { Spinner } from './basic/Spinner';
import { Switch } from './basic/Switch';
import { Container } from './basic/Container';
import { Root } from './basic/Root';
import { Content } from './basic/Content';
import { Footer } from './basic/Footer';
import { FooterTab } from './basic/FooterTab';
import { Form } from './basic/Form';
import { ToastContainer } from './basic/ToastContainer';
import { SnackbarContainer } from './basic/SnackbarContainer';
import { ActionSheetContainer } from './basic/Actionsheet';
import { PickerNB } from './basic/Picker';
import { List } from './basic/List';
import { ListItem } from './basic/ListItem';
import { Separator } from './basic/Separator';
import { DeckSwiper } from './basic/DeckSwiper';
import { Item } from './basic/Item';
import { Segment } from './basic/Segment';
import { Label } from './basic/Label';
import { Textarea } from './basic/Textarea';
import { Tab } from './basic/Tab';
import ScrollableTabView from './basic/Tabs';
import { DefaultTabBar } from './basic/Tabs/DefaultTabBar';
import { ScrollableTab } from './basic/Tabs/ScrollableTabBar';
import { Subtitle } from './basic/Subtitle';
import { Accordion } from './basic/Accordion';

const VueNativeBasePlugin = {
  // The install method is all that needs to exist on the plugin object.
  // It takes the global Vue object as well as user-defined options.
  install(Vue) {
    Vue.component('nb-drawer', Drawer);
    Vue.component('nb-row', Row);
    Vue.component('nb-col', Col);
    Vue.component('nb-grid', Grid);
    Vue.component('nb-swipe-row', SwipeRow);
    Vue.component('nb-text', Text);
    Vue.component('nb-view', View);
    Vue.component('nb-button', Button);
    Vue.component('nb-date-picker', DatePicker);
    Vue.component('nb-tab-heading', TabHeading);
    Vue.component('nb-tab-container', TabContainer);
    Vue.component('nb-icon-nb', IconNB);
    Vue.component('nb-icon', Icon);
    Vue.component('nb-style-provider', StyleProvider);
    Vue.component('nb-header', Header);
    Vue.component('nb-input-group', InputGroup);
    Vue.component('nb-input', Input);
    Vue.component('nb-title', Title);
    Vue.component('nb-fab', Fab);
    Vue.component('nb-left', Left);
    Vue.component('nb-right', Right);
    Vue.component('nb-body', Body);
    Vue.component('nb-badge', Badge);
    Vue.component('nb-checkbox', CheckBox);
    Vue.component('nb-radio', Radio);
    Vue.component('nb-thumbnail', Thumbnail);
    Vue.component('nb-card', Card);
    Vue.component('nb-cardItem', CardItem);
    Vue.component('nb-h1', H1);
    Vue.component('nb-h2', H2);
    Vue.component('nb-h3', H3);
    Vue.component('nb-spinner', Spinner);
    Vue.component('nb-switch', Switch);
    Vue.component('nb-container', Container);
    Vue.component('nb-root', Root);
    Vue.component('nb-content', Content);
    Vue.component('nb-tab-content', Content);
    Vue.component('nb-footer', Footer);
    Vue.component('nb-footer-tab', FooterTab);
    Vue.component('nb-form', Form);
    Vue.component('nb-toast', ToastContainer);
    Vue.component('nb-snackbar', SnackbarContainer);
    Vue.component('nb-action-sheet', ActionSheetContainer);
    Vue.component('nb-picker', PickerNB);
    Vue.component('nb-list', List);
    Vue.component('nb-list-item', ListItem);
    Vue.component('nb-separator', Separator);
    Vue.component('nb-deckSwiper', DeckSwiper);
    Vue.component('nb-item', Item);
    Vue.component('nb-segment', Segment);
    Vue.component('nb-label', Label);
    Vue.component('nb-textarea', Textarea);
    Vue.component('nb-tab', Tab);
    Vue.component('nb-tabs', ScrollableTabView);
    Vue.component('nb-default-tab-bar', DefaultTabBar);
    Vue.component('nb-scrollable-tab', ScrollableTab);
    Vue.component('nb-subtitle', Subtitle);
    Vue.component('nb-accordion', Accordion);
  }
};

export default VueNativeBasePlugin;
