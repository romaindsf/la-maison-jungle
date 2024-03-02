import { plantList } from '../datas/plantList'

function ShoppingList() {
	return <ul>
		{plantList.reduce()}
	</ul>
}

export default ShoppingList
