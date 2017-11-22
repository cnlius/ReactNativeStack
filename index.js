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

// 2.自定义组件的三种方式，并导出使用
import CustomComponent from './index/CustomComponent';
AppRegistry.registerComponent('RNTechStack', () => CustomComponent);


