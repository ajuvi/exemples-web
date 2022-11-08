<?php

$contador=0;
if($fd_contador = fopen('counter.txt','r')){
    $contador=fgets($fd_contador);
}
fclose($fd_contador);

$fd_contador = fopen('counter.txt','w');
$contador=$contador+1;
fwrite($fd_contador,$contador);
fclose($fd_contador);

echo $contador;
