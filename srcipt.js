var solvable = [
  [0, 1, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 1, 0, 1, 0],
  [0, 1, 0, 0, 0]
];

 function mazeRunner(maze) {
 	return buildDataStructure(maze);

 }

 function buildDataStructure(array) {
 	var tmp = array;
 	var objsArray = [];
 	var yCoord = 0;
 	var id = 1;
 	var parent_id = 0;
 	for(var i = 0; i < tmp.length; i++) {
 		for (var j = 0; j < tmp[i].length; j++) {
	 		if (tmp[i][j] > 0) {
	 			var newObj = new ObjConstructor(tmp[i][j], yCoord, j);
	 			objsArray.push(newObj);
	 			id++;
	 		}
 		}
 		yCoord++;
 	}
 	return checkNeighbors(tmp, objsArray);
 }

 function ObjConstructor(val, yCoord, xCoord) {
 	this.val = val;
 	this.yCoord = yCoord;
 	this.xCoord = xCoord;
 };

	function checkNeighbors(copyOfMaze, arrayOfObjects) {
			
	}

mazeRunner(solvable);