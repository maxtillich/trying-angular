function BoardController($scope, $routeParams, $firebase) {
	
	// Read Board
	/* var call = "https://paragraph.firebaseio.com/board/" + $routeParams.boardname; */
	var ref = new Firebase("https://paragraph.firebaseio.com/board/" + $routeParams.boardname);
	$scope.board = $firebase(ref);

	// Read Paragraphs
	var paraRef = new Firebase("https://paragraph.firebaseio.com/board/" + $routeParams.boardname + "/paragraph");
	$scope.paragraphs = $firebase(paraRef);

	// Write Paragraph
	$scope.addParagraph = function(e) {
		if(e.keyCode != 13) return;
		$scope.paragraphs.$add({content: $scope.text});
		$scope.text = "";
	}
}