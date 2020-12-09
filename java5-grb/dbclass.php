<?php
class MyClass{

public function getData(){
    $query="select top 1 title,dataLajmit,ID
    from lajmi
    order by clicks desc";

    $statment->execute($query)
    $response= $statment->fetch();
    return $response;
}
}

// [
// 	{"title","Ne ubt ..."},
// 	{"dataLajmit","22-11-2020"},
// 	{"ID","25"}
// ]