<?php 
$referId = $_GET["code"];
?>
<style>
    body{
        background: black;
    }
</style>
<script src="/js/localforage.min.js"></script>
<script>
setreferid();
async function setreferid(){
localforage.setItem("RefersMention", '<?php echo $referId;?>');
setTimeout(function(){
    gologins();
    }, 2000);
};

function gologins(){
    window.location.href = "/login";
};

</script>