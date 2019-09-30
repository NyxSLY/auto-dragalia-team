var img = images.read(
  '/storage/emulated/0/Tencent/QQfile_recv/Screenshot_20190929-221459.jpg'
);
var templ = images.read(
  '/storage/emulated/0/Documents/continue-button-blue.png'
);
var p = findImage(img, templ);
if (p) {
  toast('找到啦:' + p);
} else {
  toast('没找到');
}
