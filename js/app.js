var app = angular.module('meuApp', []);

app.controller('MeuController', function($rootScope, $scope, $window) {
    $scope.online = navigator.onLine;
    $scope.pessoa = {};
    $scope.pessoas = [];
    $scope.filtro = '';
    $scope.ordem = '';

    $scope.adicionar = function() {
        $scope.pessoas.push($scope.pessoa);
        $scope.pessoa = {};
        salvarPessoas();
    };

    $scope.remover = function(i) {
        $scope.pessoas.splice(i, 1);
    };

    $scope.ordenaPor = function(ordem) {
        $scope.ordem = ordem;
    };

    function carregarPessoas() {
        if ($window.localStorage.pessoas) {
            $scope.pessoas = JSON.parse($window.localStorage.pessoas);
        }
    }

    function salvarPessoas() {
        $window.localStorage.pessoas = JSON.stringify($scope.pessoas);
    }

    function checaConexao() {
        $rootScope.$apply(function() {
            $scope.online = navigator.onLine;
        });
    }

    $window.addEventListener('online', checaConexao);
    $window.addEventListener('offline', checaConexao);

    carregarPessoas();
});