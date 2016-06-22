<?php
    $ch = curl_init('https://graph.facebook.com/GDGThailand/posts/?access_token=641777809306865|q4lwXAOonGcdnX6Si8d0xN8sR7o&fields=message,link,full_picture');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    sleep(10);
    echo $res = curl_exec($ch);
 ?>
