function mode(array)
{
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}

// kategori --> replace spasi jadi -

kategori = mode(JSON.parse(localStorage.getItem('kategori blog'))).replace(/ /g, '-')

if (kategori === null){
	$('.bagian-minat').hide()
	kategori = 'null'
}

$('.' + kategori).each(function(n){
	if (n < 10){
		$(this).css('display', 'block')
		$(this).find('img').attr('src', $(this).find('img').data('src'))
	}
})

$('.' + kategori + '-sidebar').each(function(n){
	if (n < 10){
		$(this).css('display', 'block')
		$(this).find('img').attr('src', $(this).find('img').data('src'))
	}
})

data_kunjungan = localStorage.getItem('kunjungan blog')
localStorage.setItem('kunjungan blog', parseInt(data_kunjungan) + 1)

total_kunjungan = 0
if (parseInt(localStorage.getItem('kunjungan blog')) > 100){
	total_kunjungan = '100+'
} else {
	total_kunjungan = localStorage.getItem('kunjungan blog')
}

$('.jumlah-kunjungan').html(total_kunjungan)
$('.tampil-minat').html(kategori)

$('.theia').theiaStickySidebar({
	additionalMarginTop: 70
})