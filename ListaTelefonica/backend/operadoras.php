<?php

// Cria um array geral, para conter todos os dados das operadoras
$dados = [];

// Cria o objeto da operadora Oi
$oi = [];
$oi['nome'] = 'Oi';
$oi['codigo'] = 14;
$oi['categoria'] = 'Celular';
$oi['preco'] = 3;
// Inclui o objeto da operadora Oi no array dados
array_push($dados, $oi);

// Cria o objeto da operadora Vivo
$vivo = [];
$vivo['nome'] = 'Vivo';
$vivo['codigo'] = 15;
$vivo['categoria'] = 'Celular';
$vivo['preco'] = 2;
// Inclui o objeto da operadora Oi no array dados
array_push($dados, $vivo);


/*
Falta você fazer para as operadoras abaixo:

{nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
{nome: "GVT", codigo: 25, categoria: "Fixo", preco: 3},
{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}
*/

$tim = [];
$tim['nome'] = "Tim";
$tim['codigo'] = 41;
$tim['categoria'] = "Celular";
$tim['preco'] = 1;
array_push($dados, $tim);

$gvt = [];
$gvt['nome'] = "GVT";
$gvt['codigo'] = 25;
$gvt['categoria'] = "Fixo";
$gvt['preco'] = 3;
array_push($dados, $gvt);

$embratel = [];
$embratel['nome'] = "Embratel";
$embratel['codigo'] = 21;
$embratel['categoria'] = "Fixo";
$embratel['preco'] = 2;
array_push($dados, $embratel);

// Retorna o array de dados como um JSON
echo json_encode($dados);
