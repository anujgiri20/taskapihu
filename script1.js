


foo()
async function foo() {

    
//outer for loop is going to change the api with element j
//in api key we use template literal which is actually j
//as j changes every time we get api with diff content
//similarly with p, as p changes the next  api change
    for (var j = 1, p = 7; p < 10, j < 6; p++, j++) {
        for (var i = 0; i < 10; i++) {


           
            let data = await fetch(`https://api.harvardartmuseums.org/object?apikey=ff4dae68-70ee-4581-a872-6992d9819ccb&page=${j}`)
            let data1 = await data.json();

            //with  data1.records[i].primaryimageurl we  are going to access images in api
            //here each time i changes then new image came and at last we append that image to div
            var img = new Image();
            img.setAttribute("class", "img")
            img.src = data1.records[i].primaryimageurl;
            

            //creation of tags
            var div1 = document.getElementById("first")
            var h1 = document.createElement("h4")
            var h2 = document.createElement("h4")
            var h3 = document.createElement("h4")
            var h4 = document.createElement("h4")
            var h5 = document.createElement("h4")
            h1.setAttribute("class", "h1")
            h2.setAttribute("class", "h2")
            h3.setAttribute("class", "h3")
            h4.setAttribute("class", "h4")
            h5.setAttribute("class", "h5")

            //now here we attach api data to html tags
            h1.innerHTML = "Division : " + data1.records[i].division
            h2.innerHTML = "Century : " + data1.records[i].century
            h3.innerHTML = "Title : " + data1.records[i].title
            h4.innerHTML = "Culture : " + data1.records[i].culture
            h5.innerHTML = "Date : " + data1.records[i].dated
            
            //append all tags and image to  first div inside the row
            //container-->row-->div
            div1.append(h3, h1, h2, h4, h5)
            div1.append(img)
           

            //here we are going to do same thing but here 
            //we going to append all data to second div in container--row--div
            //bec we want one bootstrap container with one row and inside that row  two col of (col-md-6 col-lg -6 and col-sm-6) 
            let da = await fetch(`https://api.harvardartmuseums.org/object?apikey=ff4dae68-70ee-4581-a872-6992d9819ccb&page=${p}`)
            let dat = await da.json();


            var img = new Image();
            img.setAttribute("class", "img")
            img.src = dat.records[i].primaryimageurl;
            var div2 = document.getElementById("sec")
            var h1 = document.createElement("h4")
            var h2 = document.createElement("h4")
            var h3 = document.createElement("h4")
            var h4 = document.createElement("h4")
            var h5 = document.createElement("h4")
            h1.setAttribute("class", "h1")
            h2.setAttribute("class", "h2")
            h3.setAttribute("class", "h3")
            h4.setAttribute("class", "h4")
            h5.setAttribute("class", "h5")
            h1.innerHTML = "Division : " + dat.records[i].division
            h2.innerHTML = "Century : " + dat.records[i].century
            h3.innerHTML = "Title : " + dat.records[i].title
            h4.innerHTML = "Culture : " + dat.records[i].culture
            h5.innerHTML = "Date : " + dat.records[i].dated
            div2.append(h3, h1, h2, h4, h5)
            div2.append(img)





        }
    }
}
