//Promises

//ES5

/* function getRecipe() {
	setTimeout(() => {
		const recipeId = [523, 883, 432, 974];
		console.log(recipeId);

		setTimeout((id) => {
			const recipe = {
				title: 'Pasta',
				publisher: 'John'
			}
			console.log(`${id}: ${recipe.title}`);

			setTimeout((publisher) => {
				console.log(`Publisher: ${publisher}`);

			}, 1500, recipe.publisher);

		}, 1500, recipeId[2]);

	}, 1500);
}

getRecipe(); */


//ES6

var getIDs = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve([523, 883, 432, 974]);
	}, 2000);
});

const getRicipe = recID => {
	return new Promise((resolve, reject) => {
		setTimeout(ID => {
			const recipe = {
				title: 'Pizza',
				publisher: 'Doe'
			}
			resolve(`${ID}: ${recipe.title} and Publisher: ${recipe.publisher}`);
		}, 1500, recID)
	});
}

const getRelated = publiser => {
	return new Promise((resolve, reject) => {
		setTimeout(pub => {
			resolve(`Publisher: ${pub}`);
		}, 1500, publiser);
	});
}
/* 
getIDs
	.then((IDs) => {
		console.log(IDs);
		return getRicipe(IDs[2]);
	})
	.then(recipe => {
		console.log(recipe);
		return getRelated('Jonas');
	})
	.then(pub => {
		console.log(pub);

	})
	.catch((error) => {
		console.log(error);
	});  */
/* 
async function getRecipesAW() {
	const IDs = await getIDs;
	console.log(IDs);
	const recipe = await getRicipe(IDs[2]);
	console.log(recipe);
	const related = await getRelated('Jonas');
	console.log(related);

	return recipe;
}


getRecipesAW().then(result => {
	console.log(`${result} is result!`);
}); */

//Fetch()

//Promises
/* 
function getWeather(woid) {
	fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woid}/`)
		.then(result => {
			//console.log(result);
			return result.json();
		})
		.then(data => {
			//console.log(data);
			const today = data.consolidated_weather[0];
			console.log(`Area: ${data.title}, Min Temp: ${today.min_temp} & Max Temp: ${today.max_temp}`);

		})
		.catch(error => {
			console.log(error);

		})
}

getWeather(44418);
getWeather(2487956);
 */

//Fetch
async function getWeather(id) {

	try {
		const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${id}/`);
		const data = await result.json();
		//console.log(data);
		return data;
	} catch (error) {
		console.log(error);
	}

}

getWeather(44418);
let dataLondon;
getWeather(2487956).then(data => {
	dataLondon = data;
	console.log(dataLondon);
})