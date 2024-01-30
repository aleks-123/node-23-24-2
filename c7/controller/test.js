const testData = {
  data1: 'testData1',
  data2: 'testData2',
};

exports.getView = (req, res) => {
  res.render('test', testData);
};
