// Replace all occurencies of "base64" with the name of the contract
const base64 = artifacts.require("base64");

 
contract ("base64", accounts => {
    // ==== Global Test Varables ===============================================================================

    // Get some very long text as test vector
    let lorem = "Lorem ipsum1 dolor sit2 amet3, consectetur adipiscing elit. Integer at mi nulla. Vestibulum ultricies accumsan eros, id efficitur sapien dictum in. Nulla sodales suscipit diam, dignissim aliquam ipsum. Nulla at maximus libero. Curabitur sagittis tristique augue et vulputate. Maecenas ac bibendum velit, ac ornare ligula. Praesent arcu neque, lobortis non sem vitae, dapibus ultricies lacus. Morbi nec purus nec diam gravida ornare rhoncus non quam. Nulla facilisi. In fringilla elit mattis egestas pellentesque. Etiam sed laoreet arcu, sed gravida tellus. Nam nunc metus, elementum at dapibus et, vulputate vel purus. Vivamus posuere rutrum nulla non gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeosNunc sodales vestibulum pulvinar. Suspendisse eget consectetur tortor. Etiam ex est, suscipit quis sem id, suscipit aliquam felis. Cras lorem magna, facilisis in ex quis, lobortis convallis dui. Mauris convallis augue ac justo bibendum placerat. Nunc convallis arcu purus, tempus dapibus ex mattis varius. In accumsan, libero non hendrerit hendrerit, dui sem porttitor lorem, vitae malesuada massa augue sed sem. Sed rutrum at purus nec sagittis. Cras ac lobortis augue. Maecenas et diam metus.Mauris elit tellus, vulputate in porta et, elementum sed libero. Nam efficitur commodo blandit. Praesent posuere augue purus, ut eleifend mauris auctor ut. Proin gravida est accumsan purus lacinia, a porttitor lorem pulvinar. Etiam a efficitur justo. Nunc non tincidunt lectus, eu finibus ligula. Vestibulum tellus ante, mollis et orci gravida, fringilla molestie massa. Nulla faucibus eget quam eget accumsan. Curabitur interdum vel elit sit amet maximus. Nulla at auctor nunc. Praesent cursus nisl tortor, eu tempus urna sodales in. Quisque iaculis mollis lorem vitae pellentesque. Mauris sodales turpis a consequat consequat. Aliquam vel orci id lectus faucibus iaculis. Nulla non gravida turpis, sodales lobortis felis.usce et vestibulum risus, non porta nulla. Duis nec odio lorem. Morbi et mattis odio. Donec sit amet erat venenatis, dictum lorem sit amet, faucibus quam. Phasellus eget dui tristique urna porttitor semper sed id sem. Donec sapien ligula, scelerisque vitae justo at, faucibus condimentum nibh. Phasellus vitae malesuada nulla. Sed scelerisque urna mi. Integer eget tempus lectus. Nam turpis justo, efficitur sit amet rutrum in, efficitur sit amet velit. Donec elementum enim urna, ac luctus ipsum mollis non. Donec feugiat pharetra risus, nec feugiat sem accumsan ac. In non ultricies dui. Nullam hendrerit eros et nisl pharetra, ac aliquet ex molestie. Donec a nibh dapibus, facilisis purus vel, commodo elit.Pellentesque rhoncus scelerisque dolor, non consequat quam sollicitudin id. Etiam in euismod sem, ut mollis neque. Nullam a nunc tincidunt, dapibus justo in, pulvinar risus. Suspendisse id ante sodales, rhoncus lectus at, interdum orci. Pellentesque consectetur ullamcorper maximus. Sed elementum accumsan nisl eleifend suscipit. Nulla consequat euismod lorem, a vestibulum dolor vulputate sed. Nullam ex metus, tristique non efficitur quis, gravida in lorem. Nunc ac mi bibendum, dictum justo vitae, commodo quam."
    // Remove unwanted charaters from vector
    lorem = lorem.replace(RegExp('[.,;.]','g'), '');

    // ==== Tests ============================================================================================
 
    // Call
    it("Test", async() => {
        let instance= await base64.deployed();
        let n =0;
        
        let testVector = lorem.split(' ');
        for (test of testVector) {
            n++;
            // Encode
            let encoded = await instance.encode.call(test);
            let proper = Buffer.from(test).toString('base64');
            console.log("test "+n+": "+test)
            // console.log(encoded)
            // console.log(proper);
            assert.equal(proper,encoded, "Failed Encoding "+test)
    
            // Decode
            let decoded = await instance.decode.call(encoded);
            // console.log(toHex(test))
            // console.log(toHex(decoded))
            assert.equal(test, decoded, "Failed Decoding "+proper);  
        }
    });
 
 

 
 

 
});