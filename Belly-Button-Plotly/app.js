
function getData(sampleID){
    d3.json("samples.json").then((importedData) => {
        var data = importedData;
        console.log(data);

        var sampleData = data.samples;
        console.log(sampleValue);
        var resultArr = sampleData.filter(sampleObject => sampleObject.id == sampleID);
        var variableArr = resultArr[0];
        console.log(variableArr);
        var sampleValue = variableArr.sample_values;
        //console.log(sampleValue);
        var otuID = variableArr.otu_ids;
        //console.log(otuID);
        var otuLabel = variableArr.otu_labels;
        //console.log(otuLabel);

        //get wfreqdata
        var mData = data.metadata;
        var resultFreq = mData.filter(freqObject => freqObject.id == sampleID);
        var freqData = resultFreq[0];
        console.log(freqData);
        var wFreq = freqData.wfreq;
    
    })
}