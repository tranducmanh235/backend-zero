const getHomepage = (req, res) => {
    // process data
    // call model

    res.send("Home page");
};

const getAboutpage = (req, res) => {
    res.send("<h1>About page</h1>");
};

const getSample = (req, res) => {
    res.render("sample.ejs");
};

module.exports = {
    getHomepage,
    getAboutpage,
    getSample,
};
