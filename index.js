//导入注册启动组件
import {AppRegistry} from 'react-native';

// 原始
// import App from './App';
// AppRegistry.registerComponent('RNTechStack', () => App);

// 1.导入HelloWord组件
// import HelloWord from './js/page/0-helloworld/HelloWorld'
// 注册启动组件（组件只有注册后才能运行，这里用到的AppRegistry需要在组件导入区进行导入才能使用）
// 注意，这里用引号括起来的'RNTechStack'必须和你init创建的项目名一致
// AppRegistry.registerComponent('RNTechStack', () => HelloWord)

// 2.组件的定义，变量和方法的导入导出
// import TestEIComponent from './index/TestEIComponent';
// AppRegistry.registerComponent('RNTechStack', () => TestEIComponent);

// 3.自定义组件的三种方式，并导出使用
// import TestLifecycle from './index/TestLifecycle';
// AppRegistry.registerComponent('RNTechStack', () => TestLifecycle);

// 4.props
// import PropsTest from './index/PropsTest';
// AppRegistry.registerComponent('RNTechStack', () => PropsTest);

// 5.state
import StateDetail from './js/page/4-state/StateDetail';
AppRegistry.registerComponent('RNTechStack', () => StateDetail);


