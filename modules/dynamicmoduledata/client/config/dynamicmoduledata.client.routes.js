(function () {
    'use strict';

    angular
        .module('dynamicmoduledata.routes')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider'];

    function routeConfig($stateProvider) {
        $stateProvider
            .state('dynamicmoduledata', {
                abstract: true,
                url: '/dynamicmoduledata/:dynamicModuleId',
                template: '<ui-view/>'
            })
            .state('dynamicmoduledata.list', {
                url: '',
                templateUrl: 'modules/dynamicmoduledata/client/views/list-dynamicmodulesdata.client.view.html',
                controller: 'DynamicModuleDataListController',
                controllerAs: 'vm'
            })
            .state('dynamicmoduledata.create', {
                url: '/create',
                templateUrl: 'modules/dynamicmoduledata/client/views/dynamicmoduledata.client.view.html',
                controller: 'DynamicModuleDataController',
                controllerAs: 'vm',
                resolve: {
                    dynamicModuleResolve: newDynamicModule
                }
            })
            .state('dynamicmoduledata.edit', {
                url: '/:dynamicModuleDataId/edit',
                templateUrl: 'modules/dynamicmoduledata/client/views/dynamicmoduledata.client.view.html',
                controller: 'DynamicModuleDataController',
                controllerAs: 'vm',
                resolve: {
                    dynamicModuleResolve: getDynamicModule
                },
                data: {
                    roles: ['user', 'admin'],
                    pageTitle: 'Edit Article {{ articleResolve.title }}'
                }
            })
            .state('dynamicmoduledata.view', {
                url: '/:dynamicModuleDataId',
                templateUrl: 'modules/dynamicmoduledata/client/views/view-dynamicmoduledata.client.view.html',
                controller: 'DynamicModuleDataController',
                controllerAs: 'vm',
                resolve: {
                    dynamicModuleResolve: getDynamicModule
                }
            });


    }


    //RESOLVE-HELPER-METHODS:


    getDynamicModule.$inject = ['$stateParams', 'DynamicModulesDataService'];

    function getDynamicModule($stateParams, DynamicModulesDataService) {
        /*
        return DynamicModulesDataService.get({
            dynamicModuleId: $stateParams.dynamicModuleId
        }).$promise;
*/
        return;
    }

    newDynamicModule.$inject = ['DynamicModulesService'];

    function newDynamicModule(DynamicModulesService) {
        //return new DynamicModulesService();
        return;
    }



/*

    getDynamicModule.$inject = ['$stateParams', 'DynamicModulesService'];

    function getDynamicModule($stateParams, DynamicModulesService) {
        return DynamicModulesService.get({
            dynamicModuleId: $stateParams.dynamicModuleId
        }).$promise;
    }

    newDynamicModule.$inject = ['DynamicModulesService'];

    function newDynamicModule(DynamicModulesService) {
        return new DynamicModulesService();
    }
*/


})();
