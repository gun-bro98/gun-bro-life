var xhr = new XMLHttpRequest();
var url =
  "http://openapi.airkorea.or.kr/openapi/services/rest/UlfptcaAlarmInqireSvc/getUlfptcaAlarmInfo"; /*URL*/
var queryParams =
  "?" +
  encodeURIComponent("ServiceKey") +
  "=" +
  "LQtSbFT6l8%2F6E%2FGxkGcDCZ0mfvBGMKRuxfBYNpovn9j0w3tccQMFeFhQ5Ohp4LuoxnTXzoSC%2Fzc3fL56NZixJA%3D%3D"; /*Service Key*/
queryParams +=
  "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /**/
queryParams +=
  "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("2"); /**/
queryParams +=
  "&" + encodeURIComponent("year") + "=" + encodeURIComponent("2020"); /**/
queryParams +=
  "&" + encodeURIComponent("itemCode") + "=" + encodeURIComponent("PM10"); /**/
queryParams += "&_returnType=json";
xhr.open("GET", url + queryParams);
xhr.onreadystatechange = function () {
  if (this.readyState == 4) {
    console.log(
      "Status: " +
        this.status +
        "nHeaders: " +
        JSON.stringify(this.getAllResponseHeaders()) +
        "nBody: " +
        this.responseText
    );
  }
};

xhr.send("");
