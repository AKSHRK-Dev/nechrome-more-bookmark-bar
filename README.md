# More Bookmark Bar

NeChrome のブックマークバーを、2 段・3 段に折り返して表示する拡張機能です。

- アイコンを押して、段数（1〜5）を選ぶだけ。すぐにブックマークバーに反映されます。
- 入りきらないブックマークは、隠さずに次の段へ並びます。それでも入らない分は » のメニューに入ります。
- 段が増えても、ブックマークバーの上でのドラッグの並べ替えはそのまま使えます。

## 入れ方
1. [Releases](https://github.com/AKSHRK-Dev/nechrome-more-bookmark-bar/releases/latest) から `nechrome-more-bookmark-bar.zip` をダウンロードして、展開します。
2. NeChrome（または Chrome）で `chrome://extensions` を開き、右上の「デベロッパー モード」をオンにします。
3. 「パッケージ化されていない拡張機能を読み込む」を押し、展開したフォルダの中の `src` を選びます。
4. 拡張機能のアイコン（パズルの形）から固定すると、URL バーのすぐ右に出ます。

**NeChrome 専用です。** NeChrome の `chrome.nechrome` API（`nechrome` 権限）を使います。Chrome ではブックマークバーの段数を変えられません。

## ライセンス
MIT License

Developed by [ASHIKA Group](https://group.ashikanw.com/)
