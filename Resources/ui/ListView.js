function ListView() {
	var self = Ti.UI.createWindow({});
	
	// list views are designed to perform better than table views
		// table view is more customizable than list view
		
	var listView = Ti.UI.createListView();
	// sections are required for lists views and not for table views
	var sections = [];
	
	var breakfastSection = Ti.UI.createListSection({
		headerTitle : 'breakfast'
	});
	var breakfastDataSet = [
		{ properties: { title: 'panckaes' }},
		{ properties: { title: 'french toast' }},
		{ properties: { title: 'waffles' }}
	];
	breakfastSection.setItems(breakfastDataSet);
	sections.push(breakfastSection);
	
	var lunchSection = Ti.UI.createListSection({
		headerTitle : 'lunch'
	});
	var lunchDataSet = [
		{ properties: { title: 'grilled cheese' }},
		{ properties: { title: 'turkey sandwich' }},
		{ properties: { title: 'soup' }}
	];
	lunchSection.setItems(lunchDataSet);
	sections.push(lunchSection);
	
	listView.setSections(sections);
	self.add(listView);
	
	var dinnerSection = Ti.UI.createListSection({
		headerTitle: 'dinner'
	});
	var dinnerDataSet = [
		{ properties: { title: 'salmon' }},
		{ properties: { title: 'steak' }},
		{ properties: { title: 'portobello mushroom' }}
	];
	dinnerSection.setItems(dinnerDataSet);
	listView.appendSection(dinnerSection);

	return self;
}

module.exports = ListView;
