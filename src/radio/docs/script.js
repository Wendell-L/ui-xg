angular.module('uixDemo').controller('radioDemoCtrl', ['$scope', '$log', function ($scope, $log) {
    $scope.checkedValue = '';
    $scope.valMap = {
        1: 'A',
        2: 'B',
        3: 'C',
        4: 'D'
    };
    $scope.demoValue = [{value: '1', text: '足球'}];

    $scope.changedConsole = function (value) {
        $log.log('你选择了' + $scope.valMap[value]);
    };
    $scope.changedFn = function (value) {
        $log.log(value);
    };

    $scope.demoValues = [{value: '1', text: '足球'}, {value: '2', text: '篮球'}, {value: '3', text: '乒乓球'}, {
        value: '4',
        text: '桌球'
    }];
    $scope.changedValue = 9;
    $scope.state1 = {
        plainOptions: ['Apple1', 'Pear', 'Orange'],
        options: [
            {label: 'Apple233', value: 'Apple'},
            {label: 'Pear', value: 'Pear'},
            {label: 'Orange', value: 'Orange'}
        ],
        optionsWithDisabled: [
            {label: 'Apple3', value: 'AppleValue'},
            {label: 'Pear', value: 'PearValue', disabled: true},
            {label: 'Orange', value: 'OrangeValue', disabled: false}
        ],
        value1: 'Pear',
        value2: 'Pear',
        value3: 'PearValue'
    };
    $scope.disabled = true;
    $scope.toggleDisabledFn = function () {
        $scope.disabled = !$scope.disabled;
        $log.log($scope.disabled);
    };
}]);