describe("テストセットタイトル", function(){
	it("テストタイトル", function(){
		// ここにテスト内容を記述します。
	});

	before(function(){
		// describe() の最初に実行されます。
		// 前処理系を記述します。
	});

	after(function(){
		// describe() の最後に実行されます。
		// 後処理系を記述します。
	});

	beforeEach(function(){
		// 各 it() の前に実行されます。
		// it() 実行のたびに行いたい前処理系を記述します。
	});

	afterEach(function(){
		// 各 it() の後に実行されます。
		// it() 実行のたびに行いたい後処理系を記述します。
	});
});
