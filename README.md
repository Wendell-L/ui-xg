# angular-ui-fugu - AngularJS directives 

<<<<<<< HEAD
## 依赖说明
本组件的开发主要依赖于以下几个库:

- Angular JS(v1.2.25): 组件库只支持1.2.25版本的AngularJs。
- Bootstrap(v3.3.6): 支持组件库样式设计。

## 构建
如果需要所有的组件,直接引用dist目录下的文件即可,如果需要定制化组件,在项目目录下执行下面的命令安装依赖包

```
npm install
```
安装完成之后执行

```
gulp -m directive1,directive2,directive3
```
即可自动在dist下构建需要的directive1,directive2,directive3组件集合

## 安装
- 使用npm安装:

	```
	npm install angular-ui-fugu
	```

## 使用
- 文件引入
	- angular.min.js
	- bootstrap.css
	- ui.fugu.min.css
	- ui.fugu.min.js

	**angular和bootstrap文件的引入要在fugu文件引入之前**
- 具体使用

```
/**
 * js文件
 */
angular.module('myApp',['ui.fugu']);  // 组件依赖注入
// 以alert使用为例
angular.module('fuguDemo').controller('alertDemoCtrl',['$scope', function ($scope) {
    $scope.alerts = [
        { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
        { type: 'success', msg: 'Well done! You successfully read this important alert message.' },
        { type: 'warning', msg: 'FBI Warning! Manong would ignore anything about warning.' },
        { type: 'info', msg: 'I know that you wouldn\'t see this line.' }
    ];
    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
}]);


/**
 * html文件
 */
 <div ng-controller="alertDemoCtrl">
    <fugu-alert ng-repeat="alert in alerts" type="{{alert.type}}" close="true" close-func="closeAlert($index)" has-icon="true">{{alert.msg}}</fugu-alert>
</div>

```
## 鸣谢
- Gulp：[https://github.com/gulpjs/gulp](https://github.com/gulpjs/gulp)
- Jasmine：[http://jasmine.github.io/](http://jasmine.github.io/)
- Karma：[https://github.com/karma-runner/karma](https://github.com/karma-runner/karma)
- ESLint：[http://eslint.org](http://eslint.org)
- UI Bootstrap：[https://angular-ui.github.io/bootstrap/](https://angular-ui.github.io/bootstrap/)
- ui-select：[https://github.com/angular-ui/ui-select](https://github.com/angular-ui/ui-select)
- angular-growl-2：[https://github.com/JanStevens/angular-growl-2](https://github.com/JanStevens/angular-growl-2)
- angular-drag-and-drop-lists：[https://github.com/marceljuenemann/angular-drag-and-drop-lists](https://github.com/marceljuenemann/angular-drag-and-drop-lists)


## LICENSE
ISC
=======
## directives
- [alert](./src/alert/docs)
- [button](./src/button/docs)
- [buttonGroup](./src/buttonGroup/docs)
- [timepanel](./src/timepanel/docs)
- [calendar](./src/calendar/docs)
- [datepicker](./src/datepicker/docs)
- [dropdown](./src/dropdown/docs)
- [modal](./src/modal/docs)
- [notification](./src/notification/docs)
- [pager](./src/pager/docs)
- [popover](./src/popover/docs)
- [searchBox](./src/searchBox/docs)
- [select](./src/select/docs)
- [sortable](./src/sortable/docs)
- [switch](./src/switch/docs)
- [timepicker](./src/timepicker/docs)
- [tooltip](./src/tooltip/docs)
- [tree](./src/tree/docs)
>>>>>>> refactor(popover):add popover directive