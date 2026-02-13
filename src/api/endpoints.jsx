let endpoints = {
    SIGNIN: 'login',
    SIGNOUT: 'logout',
    // casestudy,
    CASECATEGORY: 'category/list',
    CASEPLATFORM: 'comman/platformlist',
    CASESTUDYLIST: 'case_study/list',
    CASESTUDYCREATE: 'case_study/create',
    CASESTUDYGET: 'case_study/get/:id',
    CASESTUDYACTIVE: 'case_study/active/:id',
    CASESTUDYUPDATE: 'case_study/update',
    CASESTUDYDELETE: 'case_study/delete/:id',
    CASESTUDYSHOWHOME: 'case_study/homepageshow/:id',

    // casestudy platform,

    CASESTUDYPLATFORMLIST: 'comman/listtechnology',
    CASESTUDYPLATFORMCREATE: 'comman/addtechnology',
    CASESTUDYPLATFORMGET: 'comman/gettechnology/:id',
    CASESTUDYPLATFORMUPDATE: 'comman/updatetechnology',
    CASESTUDYPLATFORMDELETE: 'comman/deletetechnology/:id',

    // casestudy gallery,

    CASESTUDYGALLERYGET: "case_study/galleryget/:id",
    CASESTUDYGALLERYCREATE: "case_study/managemnetgalleryupdate",
    CASESTUDYGALLERYDELETE: "case_study/deletegallery/:id",

    // portfolio,

    PORTFOLIOLIST: 'portfolio/list',
    PORTFOLIOCREATE: 'portfolio/create',
    PORTFOLIOGET: 'portfolio/get/:id',
    PORTFOLIOUPDATE: 'portfolio/update',
    PORTFOLIODELETE: 'portfolio/delete/:id',
    PORFOLIOSUBCATEGORY: 'sub_category/list',
    PORTFOLIOACTIVEINACTIVE: 'portfolio/activeOrDeactive/:id',

    // banner laptop,

    BANNERLAPTOPLIST: "fileuploding/bannerimagelist",
    BANNERLAPTOPCREATE: "fileuploding/bannerimg",
    BANNERLAPTOPGET: "fileuploding/get/:id",
    BANNERLAPTOPUPDATE: "fileuploding/bannerimageupdate",
    BANNERLAPTOPDELETE: "fileuploding/deletebanner/:id",
    BANNERLAPTOPACTIVE: "fileuploding/banneractiationlaptop/:id",

    // banner mobile,

    BANNERMOBILELIST: "fileuploding/bannerimagelistmobile",
    BANNERMOBILECREATE: "fileuploding/bannerimgmobile",
    BANNERMOBILEGET: "fileuploding/bannermobiledetails/:id",
    BANNERMOBILEUPDATE: "fileuploding/bannerimageupdatemobile",
    BANNERMOBILEDELETE: "fileuploding/deletebannermobile/:id",
    BANNERMOBILEACTIVE: "fileuploding/banneractivation/:id",

    // Our team ,

    OURTEAMPLAYERSLIST: "our_teams/list",
    OURTEAMPLAYERSCREATE: "our_teams/create",
    OURTEAMPLAYERSGET: "our_teams/get/:id",
    OURTEAMPLAYERSUPDATE: "our_teams/update",
    OURTEAMPLAYERSDELETE: "our_teams/delete/:id",
    OURTEAMPLAYERSACTIVE: "our_teams/activationstatus/:id",

    // Our client ,

    OURCLIENTLIST: "fileuploding/listclientimg",
    OURCLIENTCREATE: "fileuploding/ourclientsadd",
    OURCLIENTDELETE: "fileuploding/deleteclientimg/:id",

    // services, ,

    SERVICELIST: "services/list",
    SERVICECREATE: "services/create",
    SERVICEGET: "services/get/:id",
    SERVICEUPDATE: "services/update",
    SERVICEDELETE: "services/delete/:id",
    SERVICEACTIVE: "services/activationstatus/:id",

    // Happy Moments ,

    HAPPYMOMENTLIST: "our_teams/happymomentlist",
    HAPPYMOMENTCREATE: "our_teams/happymomentcreate",
    HAPPYMOMENTDELETE: "our_teams/deletemoment/:id",

    // contactUs,

    CONTACTUSLIST: "contact_us/list",
    CONTACTUSGET: "contact_us/get/:id",
    CONTACTUSDELETE: "contact_us/delete/:id",

    // choose us ,

    CHOOSEUSLIST: "fileuploding/mobileimagelist",
    CHOOSEUSCREATE: "fileuploding/mobileimage",
    CHOOSEUSGET: "fileuploding/mobileimageget/:id",
    CHOOSEUSUPDATE: "fileuploding/updatemobileapp",
    CHOOSEUSDELETE: "fileuploding/deletemobileapp/:id",
    CHOOSEUSACTIVE: "fileuploding/activationmobile/:id",

    // leader Ship ,

    LEADERSHIPLIST: "our_teams/leadershiplist",
    LEADERSHIPCREATE: "our_teams/leadershipcreate",
    LEADERSHIPGET: "our_teams/leadershipdetails/:id",
    LEADERSHIPUPDATE: "our_teams/leadershipupdate",
    LEADERSHIPDELETE: "our_teams/leadershipdelete/:id",
    LEADERSHIPACTIVE: "our_teams/leaderactivation/:id",

    // count list,
    COUNTDASH: "dashboardcount/count",


    // Category-portfolio ,

    CATEGORYPORTFOLIOLIST: "category/categorylist",
    CATEGORYPORTFOLIOCREATE: "category/create",
    CATEGORYPORTFOLIOGET: "category/get/:id",
    CATEGORYPORTFOLIOUPDATE: "category/update",
    CATEGORYPORTFOLIODELETE: "category/delete/:id",
    CATEGORYPORTFOLIOACTIVE: "category/activation/:id",

    // Products ,

    PRODUCTSLIST: "product/list",
    PRODUCTSCREATE: "product/create",
    PRODUCTSGET: "product/get/:id",
    PRODUCTSUPDATE: "product/update",
    PRODUCTSDELETE: "product/delete/:id",
    PRODUCTSACTIVE: "product/active/:id",

    // Product gallery,

    PRODUCTGALLERYGET: "product/galleryget/:id",
    PRODUCTGALLERYCREATE: "product/galleryupdate",
    PRODUCTGALLERYDELETE: "product/deletegallery/:id",
}

let API_EP_BOOK = {
    SIGNIN_API_EP: {
        url: endpoints.SIGNIN, method: 'POST', authorization: true
    },
    COUNTDASH_API_EP: {
        url: endpoints.COUNTDASH, method: 'POST', authorization: true
    },
    SIGNOUT_API_EP: {
        url: endpoints.SIGNOUT, method: 'GET', authorization: true
    },
    CASESTUDYCATEGORY_API_EP: {
        url: endpoints.CASECATEGORY, method: 'GET', authorization: true
    },
    CASESTUDYPLATFORM_API_EP: {
        url: endpoints.CASEPLATFORM, method: 'GET', authorization: true
    },
    CASESTUDYLIST_API_EP: {
        url: endpoints.CASESTUDYLIST, method: 'POST', authorization: true
    },
    CASESTUDYCREATE_API_EP: {
        url: endpoints.CASESTUDYCREATE, method: 'POST', authorization: true
    },
    CASESTUDYGET_API_EP: {
        url: endpoints.CASESTUDYGET, method: 'GET', authorization: true
    },
    CASESTUDYACTIVE_API_EP: {
        url: endpoints.CASESTUDYACTIVE, method: 'GET', authorization: true
    },
    CASESTUDYSHOWHOME_API_EP: {
        url: endpoints.CASESTUDYSHOWHOME, method: 'GET', authorization: true
    },
    CASESTUDYUPDATE_API_EP: {
        url: endpoints.CASESTUDYUPDATE, method: 'POST', authorization: true
    },
    CASESTUDYDELETE_API_EP: {
        url: endpoints.CASESTUDYDELETE, method: 'DELETE', authorization: true
    },

    // casestudy Gallery,

    CASESTUDYGALLERYGET_API_EP: {
        url: endpoints.CASESTUDYGALLERYGET, method: 'GET', authorization: true
    },
    CASESTUDYGALLERYCREATE_API_EP: {
        url: endpoints.CASESTUDYGALLERYCREATE, method: 'POST', authorization: true
    },
    CASESTUDYGALLERYDELETE_API_EP: {
        url: endpoints.CASESTUDYGALLERYDELETE, method: 'DELETE', authorization: true
    },

    // portfolio,

    PORTFOLIOLIST_API_EP: {
        url: endpoints.PORTFOLIOLIST, method: 'POST', authorization: true
    },
    PORTFOLIOCREATE_API_EP: {
        url: endpoints.PORTFOLIOCREATE, method: 'POST', authorization: true
    },
    PORTFOLIOGET_API_EP: {
        url: endpoints.PORTFOLIOGET, method: 'GET', authorization: true
    },
    PORTFOLIOUPDATE_API_EP: {
        url: endpoints.PORTFOLIOUPDATE, method: 'POST', authorization: true
    },
    PORTFOLIODELETE_API_EP: {
        url: endpoints.PORTFOLIODELETE, method: 'DELETE', authorization: true
    },
    PORTFOLIOSUBCATEGORY_API_EP: {
        url: endpoints.PORFOLIOSUBCATEGORY, method: 'POST', authorization: true
    },
    PORTFOLIOACTIVE_API_EP: {
        url: endpoints.PORTFOLIOACTIVEINACTIVE, method: 'GET', authorization: true
    },
    // banner-laptop,
    BANNERLAPTOPLIST_API_EP: {
        url: endpoints.BANNERLAPTOPLIST, method: 'POST', authorization: true
    },
    BANNERLAPTOPCREATE_API_EP: {
        url: endpoints.BANNERLAPTOPCREATE, method: 'POST', authorization: true
    },
    BANNERLAPTOPGET_API_EP: {
        url: endpoints.BANNERLAPTOPGET, method: 'GET', authorization: true
    },
    BANNERLAPTOPUPDATE_API_EP: {
        url: endpoints.BANNERLAPTOPUPDATE, method: 'POST', authorization: true
    },
    BANNERLAPTOPDELETE_API_EP: {
        url: endpoints.BANNERLAPTOPDELETE, method: 'DELETE', authorization: true
    },
    BANNERLAPTOPACTIVE_API_EP: {
        url: endpoints.BANNERLAPTOPACTIVE, method: 'GET', authorization: true
    },

    // banner-mobile,
    BANNERMOBILELIST_API_EP: {
        url: endpoints.BANNERMOBILELIST, method: 'POST', authorization: true
    },
    BANNERMOBILECREATE_API_EP: {
        url: endpoints.BANNERMOBILECREATE, method: 'POST', authorization: true
    },
    BANNERMOBILEGET_API_EP: {
        url: endpoints.BANNERMOBILEGET, method: 'GET', authorization: true
    },
    BANNERMOBILEUPDATE_API_EP: {
        url: endpoints.BANNERMOBILEUPDATE, method: 'POST', authorization: true
    },
    BANNERMOBILEDELETE_API_EP: {
        url: endpoints.BANNERMOBILEDELETE, method: 'DELETE', authorization: true
    },
    BANNERMOBILEACTIVE_API_EP: {
        url: endpoints.BANNERMOBILEACTIVE, method: 'GET', authorization: true
    },
    // our-team,
    OURTEAMPLAYERSLIST_API_EP: {
        url: endpoints.OURTEAMPLAYERSLIST, method: 'POST', authorization: true
    },
    OURTEAMPLAYERSCREATE_API_EP: {
        url: endpoints.OURTEAMPLAYERSCREATE, method: 'POST', authorization: true
    },
    OURTEAMPLAYERSGET_API_EP: {
        url: endpoints.OURTEAMPLAYERSGET, method: 'GET', authorization: true
    },
    OURTEAMPLAYERSUPDATE_API_EP: {
        url: endpoints.OURTEAMPLAYERSUPDATE, method: 'POST', authorization: true
    },
    OURTEAMPLAYERSDELETE_API_EP: {
        url: endpoints.OURTEAMPLAYERSDELETE, method: 'DELETE', authorization: true
    },
    OURTEAMPLAYERSACTIVE_API_EP: {
        url: endpoints.OURTEAMPLAYERSACTIVE, method: 'GET', authorization: true
    },
    // our clients,

    OURCLIENTLIST_API_EP: {
        url: endpoints.OURCLIENTLIST, method: 'POST', authorization: true
    },
    OURCLIENTCREATE_API_EP: {
        url: endpoints.OURCLIENTCREATE, method: 'POST', authorization: true
    },
    OURCLIENTDELETE_API_EP: {
        url: endpoints.OURCLIENTDELETE, method: 'DELETE', authorization: true
    },
    // services,
    SERVICELIST_API_EP: {
        url: endpoints.SERVICELIST, method: 'POST', authorization: true
    },
    SERVICECREATE_API_EP: {
        url: endpoints.SERVICECREATE, method: 'POST', authorization: true
    },
    SERVICEGET_API_EP: {
        url: endpoints.SERVICEGET, method: 'GET', authorization: true
    },
    SERVICEUPDATE_API_EP: {
        url: endpoints.SERVICEUPDATE, method: 'POST', authorization: true
    },
    SERVICEDELETE_API_EP: {
        url: endpoints.SERVICEDELETE, method: 'DELETE', authorization: true
    },
    SERVICEACTIVE_API_EP: {
        url: endpoints.SERVICEACTIVE, method: 'GET', authorization: true
    },
    // happy moments,

    HAPPYMOMENTLIST_API_EP: {
        url: endpoints.HAPPYMOMENTLIST, method: 'POST', authorization: true
    },
    HAPPYMOMENTCREATE_API_EP: {
        url: endpoints.HAPPYMOMENTCREATE, method: 'POST', authorization: true
    },
    HAPPYMOMENTDELETE_API_EP: {
        url: endpoints.HAPPYMOMENTDELETE, method: 'DELETE', authorization: true
    },

    // contactus,

    CONTACTUSLIST_API_EP: {
        url: endpoints.CONTACTUSLIST, method: 'POST', authorization: true
    },
    CONTACTUSGET_API_EP: {
        url: endpoints.CONTACTUSGET, method: 'GET', authorization: true
    },
    CONTACTUSDELETE_API_EP: {
        url: endpoints.CONTACTUSDELETE, method: 'DELETE', authorization: true
    },

    // choose us,

    CHOOSEUSLIST_API_EP: {
        url: endpoints.CHOOSEUSLIST, method: 'POST', authorization: true
    },
    CHOOSEUSCREATE_API_EP: {
        url: endpoints.CHOOSEUSCREATE, method: 'POST', authorization: true
    },
    CHOOSEUSGET_API_EP: {
        url: endpoints.CHOOSEUSGET, method: 'GET', authorization: true
    },
    CHOOSEUSUPDATE_API_EP: {
        url: endpoints.CHOOSEUSUPDATE, method: 'POST', authorization: true
    },
    CHOOSEUSDELETE_API_EP: {
        url: endpoints.CHOOSEUSDELETE, method: 'DELETE', authorization: true
    },
    CHOOSEUSACTIVE_API_EP: {
        url: endpoints.CHOOSEUSACTIVE, method: 'GET', authorization: true
    },

    // leadership,

    LEADERSHIPLIST_API_EP: {
        url: endpoints.LEADERSHIPLIST, method: 'POST', authorization: true
    },
    LEADERSHIPCREATE_API_EP: {
        url: endpoints.LEADERSHIPCREATE, method: 'POST', authorization: true
    },
    LEADERSHIPGET_API_EP: {
        url: endpoints.LEADERSHIPGET, method: 'GET', authorization: true
    },
    LEADERSHIPUPDATE_API_EP: {
        url: endpoints.LEADERSHIPUPDATE, method: 'POST', authorization: true
    },
    LEADERSHIPDELETE_API_EP: {
        url: endpoints.LEADERSHIPDELETE, method: 'DELETE', authorization: true
    },
    LEADERSHIPACTIVE_API_EP: {
        url: endpoints.LEADERSHIPACTIVE, method: 'GET', authorization: true
    },

    // Portfolio category,
    CATEGORYPORTFOLIOLIST_API_EP: {
        url: endpoints.CATEGORYPORTFOLIOLIST, method: 'POST', authorization: true
    },
    CATEGORYPORTFOLIOCREATE_API_EP: {
        url: endpoints.CATEGORYPORTFOLIOCREATE, method: 'POST', authorization: true
    },
    CATEGORYPORTFOLIOGET_API_EP: {
        url: endpoints.CATEGORYPORTFOLIOGET, method: 'GET', authorization: true
    },
    CATEGORYPORTFOLIOUPDATE_API_EP: {
        url: endpoints.CATEGORYPORTFOLIOUPDATE, method: 'POST', authorization: true
    },
    CATEGORYPORTFOLIODELETE_API_EP: {
        url: endpoints.CATEGORYPORTFOLIODELETE, method: 'DELETE', authorization: true
    },
    CATEGORYPORTFOLIOACTIVE_API_EP: {
        url: endpoints.CATEGORYPORTFOLIOACTIVE, method: 'GET', authorization: true
    },

    // platform casestudy,

    CASESTUDYPLATFORMLIST_API_EP: {
        url: endpoints.CASESTUDYPLATFORMLIST, method: 'POST', authorization: true
    },
    CASESTUDYPLATFORMCREATE_API_EP: {
        url: endpoints.CASESTUDYPLATFORMCREATE, method: 'POST', authorization: true
    },
    CASESTUDYPLATFORMGET_API_EP: {
        url: endpoints.CASESTUDYPLATFORMGET, method: 'GET', authorization: true
    },
    CASESTUDYPLATFORMUPDATE_API_EP: {
        url: endpoints.CASESTUDYPLATFORMUPDATE, method: 'POST', authorization: true
    },
    CASESTUDYPLATFORMDELETE_API_EP: {
        url: endpoints.CASESTUDYPLATFORMDELETE, method: 'DELETE', authorization: true
    },

    // Products,

    PRODUCTSLIST_API_EP: {
        url: endpoints.PRODUCTSLIST, method: 'POST', authorization: true
    },
    PRODUCTSCREATE_API_EP: {
        url: endpoints.PRODUCTSCREATE, method: 'POST', authorization: true
    },
    PRODUCTSGET_API_EP: {
        url: endpoints.PRODUCTSGET, method: 'GET', authorization: true
    },
    PRODUCTSUPDATE_API_EP: {
        url: endpoints.PRODUCTSUPDATE, method: 'POST', authorization: true
    },
    PRODUCTSDELETE_API_EP: {
        url: endpoints.PRODUCTSDELETE, method: 'DELETE', authorization: true
    },
    PRODUCTSACTIVE_API_EP: {
        url: endpoints.PRODUCTSACTIVE, method: 'GET', authorization: true
    },

     // product Gallery,

    PRODUCTGALLERYGET_API_EP: {
        url: endpoints.PRODUCTGALLERYGET, method: 'GET', authorization: true
    },
    PRODUCTGALLERYCREATE_API_EP: {
        url: endpoints.PRODUCTGALLERYCREATE, method: 'POST', authorization: true
    },
    PRODUCTGALLERYDELETE_API_EP: {
        url: endpoints.PRODUCTGALLERYDELETE, method: 'DELETE', authorization: true
    },

}
export default API_EP_BOOK;