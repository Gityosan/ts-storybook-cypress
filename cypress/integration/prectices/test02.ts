describe("Test Suite", function(){
	it("Test 01", function(){
		// ページ移動
		cy.visit("https://dev.softwarenote.info/test/test_exp01.php");

		// 要素の取得にはjQueryセレクタが使えます
		cy.get("#id");
		cy.get(".class");

		// フォームの操作
		cy.get('input[type="text"][name="post_textbox"]').type("cypress.io"); // テキストボックス
		cy.get('textarea[name="post_textarea"]').type("cypress.io"); // テキストエリア
		cy.get('input[name="post_checkbox"]').check(); // チェックボックス
		cy.get('input[name="post_radio"]').check("val2"); // ラジオボタン value="val2"を選択する
		cy.get('select[name="post_select"]').select("val2"); // プルダウン value="val2"を選択する

		// メソッドチェーンによる実装
		cy.get('textarea[name="post_textarea"]')
			.type("cypress.io") // 「cypress.io」と入力し
			.type("{enter}") // エンター
			.type("cypress.io"); // 「cypress.io」と入力

		// ラジオボタン、チェックボックス
		cy.get('input[type="radio"]').first().check(); // ラジオボタン 最初の項目をチェックする
		cy.get('input[type="checkbox"]') // チェックボックス
			.each(function($el, index, $list){
				if($el.prop("checked")){
					$el.prop("checked", false); // チェックをはずす
				}else{
					$el.prop("checked", true); // チェックする
				}
			});

		// ボタンのクリックなど
		cy.get('[type="button"]').click(); // ボタンをクリックする
		cy.contains("送信").click(); // 文字列から要素を取得しクリック
		cy.get('form[name="form_test"]').submit(); // POSTする

		// アサーション（Chai BDD TDD Assertions）
		cy.get('[name="post_textbox"]').should("have.value", "cypress.io"); // TDD アサーション
		cy.get('[name="post_textbox"]').then(($el) => {
			expect($el).to.have.value("cypress.io"); // BDD アサーション
		});

		cy.get("#result_text").should("have.text", "結果");
		cy.get("#result_text").then(($el) => {
			expect($el).to.have.text("結果");
		});

		// その他の操作
		cy.screenshot(); // スクリーンショット
		cy.reload(); // ページのリロード
		cy.log("test log"); // ログ出力

		cy.setCookie("ses_id", "dabde"); // クッキーの設定
		cy.getCookie("ses_id"); // クッキーの取得
		cy.clearCookie("ses_id"); // クッキーの削除
	});
});