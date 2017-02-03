class TicTacToe {
    constructor() {
			this.GameField =	[
			[null,null,null],
			[null,null,null],
			[null,null,null]];
			this.PlayerSymbol='x';
			this.NumFreeField=9;
    }

    getCurrentPlayerSymbol() {
		
		return this.PlayerSymbol;
	}

    nextTurn(rowIndex, columnIndex) {
		if( this.GameField[rowIndex][columnIndex] === null){
			this.GameField[rowIndex][columnIndex] = this.PlayerSymbol;
			this.NumFreeField--;
			if(this.PlayerSymbol === 'x'){
				this.PlayerSymbol='o';
			}else{
				this.PlayerSymbol='x';
			}
		}
    }

    isFinished() {
		if (this.getWinner() != null) return true;
        else 
            if (this.noMoreTurns() == true) return true;
        else
            return false;
	}

    getWinner() {
		/*if have time remake*/
		if ((this.GameField[0][0] === this.GameField[0][1]) && (this.GameField[0][0] === this.GameField[0][2])&&(this.GameField[0][0]!=null))  
			 return this.GameField[0][0];  else
		if ((this.GameField[1][0] === this.GameField[1][1]) && (this.GameField[1][0] === this.GameField[1][2])&&(this.GameField[1][0]!=null))  
			 return this.GameField[1][0];  else
		if ((this.GameField[2][0] === this.GameField[2][1]) && (this.GameField[2][0] === this.GameField[2][2])&&(this.GameField[2][0]!=null))  
			 return this.GameField[2][0];  else
		if ((this.GameField[0][0] === this.GameField[1][0]) && (this.GameField[0][0] === this.GameField[2][0])&&(this.GameField[0][0]!=null))  
			 return this.GameField[0][0];  else
		if ((this.GameField[0][1] === this.GameField[1][1]) && (this.GameField[0][1] === this.GameField[2][1])&&(this.GameField[0][1]!=null))  
			 return this.GameField[0][1];  else
		if ((this.GameField[0][2] === this.GameField[1][2]) && (this.GameField[0][2] === this.GameField[2][2])&&(this.GameField[0][0]!=null))  
			 return this.GameField[0][2];  else
		if ((this.GameField[0][0] === this.GameField[1][1]) && (this.GameField[0][0] === this.GameField[2][2])&&(this.GameField[1][1]!=null))  
			 return this.GameField[0][0];  else
		if ((this.GameField[0][2] === this.GameField[1][1]) && (this.GameField[0][2] === this.GameField[2][0])&&(this.GameField[1][1]!=null))  
			 return this.GameField[0][2];  
		return null;


    }

    noMoreTurns() {
		if(!this.NumFreeField){
			return true;
		}else {
			return false;
		}

    }

    isDraw() {
		if((this.noMoreTurns() === true)&& (this.getWinner() ===null)) return true;
			else return false;
    }

    getFieldValue(rowIndex, colIndex) {
		return this.GameField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
