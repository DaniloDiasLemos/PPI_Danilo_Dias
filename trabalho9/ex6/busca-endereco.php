<?php

require "conexaoMysql.php";
$pdo = mysqlConnect();

class Endereco
{
  public $rua;
  public $bairro;
  public $cidade;

  function __construct($rua, $bairro, $cidade)
  {
    $this->rua = $rua;
    $this->bairro = $bairro;
    $this->cidade = $cidade;
  }
}

$cep = $_GET['cep'] ?? '';

try {
  $sql = <<<SQL
    SELECT *
    FROM endereco
    WHERE cep = ?
  SQL;

  $stmt = $pdo->prepare($sql);
  $stmt->execute([$cep]);

  $row = $stmt->fetch();
  if (!$row) {
    $endereco = new Endereco('', '', '');
  } else {
    $endereco = new Endereco(
      $row['rua'],
      $row['bairro'],
      $row['cidade']
    );
  }
} catch (Exception $e) {
  exit('Falha ao carregar os dados: ' . $e->getMessage());
}

header('Content-type: application/json');
echo json_encode($endereco);
