<?php

// Cria um array geral, para conter todos os dados das operadoras
$dados = [];

// Cria o objeto da operadora Oi
$maria = [];
$maria['nome'] = 'Maria';
$maria['idade'] = 24;
$maria['operadora'] = 'Vivo';
$maria['data'] = 3; //numero placeholder para testar inserção de data depois
// Inclui o objeto da operadora maria no array dados
array_push($dados, $maria);

// Cria o objeto da operadora Vivo
$taina = [];
$taina['nome'] = 'Tainá';
$taina['idade'] = 15;
$taina['operadora'] = 'Tim';
$taina['data'] = 2;
// Inclui o objeto da operadora Taina no array dados
array_push($dados, $taina);

$carlos = [];
$carlos['nome'] = "Carlos";
$carlos['idade'] = 41;
$carlos['operadora'] = "Oi";
$carlos['data'] = 1;
array_push($dados, $carlos);

$julia = [];
$julia['nome'] = "Julia";
$julia['idade'] = 25;
$julia['operadora'] = "GVT";
$julia['data'] = 3;
array_push($dados, $julia);

$marcos = [];
$marcos['nome'] = "Marcos";
$marcos['idade'] = "21";
$marcos['operadora'] = "Embratel";
$marcos['data'] = 2;
array_push($dados, $marcos);

// Retorna o array de dados como um JSON
echo json_encode($dados);
?>