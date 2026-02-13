import API_EP_BOOK from "../../endpoints";
import API from "../../api";

const AdminLogout = API_EP_BOOK.SIGNOUT_API_EP;
const CaseCategory = API_EP_BOOK.CASESTUDYCATEGORY_API_EP;
const CasePlatform = API_EP_BOOK.CASESTUDYPLATFORM_API_EP;
const CaseStudyList = API_EP_BOOK.CASESTUDYLIST_API_EP;
const CaseStudyCreate = API_EP_BOOK.CASESTUDYCREATE_API_EP;
const CaseStudyGet = API_EP_BOOK.CASESTUDYGET_API_EP;
const CaseStudyUpdate = API_EP_BOOK.CASESTUDYUPDATE_API_EP;
const CaseStudyDelete = API_EP_BOOK.CASESTUDYDELETE_API_EP;
const CaseStudyShowHome = API_EP_BOOK.CASESTUDYSHOWHOME_API_EP;

// casestudy platform,

const CaseStudyPlatformList = API_EP_BOOK.CASESTUDYPLATFORMLIST_API_EP;
const CaseStudyPlatformCreate = API_EP_BOOK.CASESTUDYPLATFORMCREATE_API_EP;
const CaseStudyPlatformGet = API_EP_BOOK.CASESTUDYPLATFORMGET_API_EP;
const CaseStudyPlatformUpdate = API_EP_BOOK.CASESTUDYPLATFORMUPDATE_API_EP;
const CaseStudyPlatformDelete = API_EP_BOOK.CASESTUDYPLATFORMDELETE_API_EP;

// casestudy gallery,

const CaseStudyGalleryGet = API_EP_BOOK.CASESTUDYGALLERYGET_API_EP;
const CaseStudyGalleryUpdate = API_EP_BOOK.CASESTUDYGALLERYCREATE_API_EP;
const CaseStudyGalleryDelete = API_EP_BOOK.CASESTUDYGALLERYDELETE_API_EP;

// portfolio,

const PorfolioList = API_EP_BOOK.PORTFOLIOLIST_API_EP;
const PorfolioCreate = API_EP_BOOK.PORTFOLIOCREATE_API_EP;
const PorfolioGet = API_EP_BOOK.PORTFOLIOGET_API_EP;
const PorfolioActiveInactive = API_EP_BOOK.PORTFOLIOACTIVE_API_EP;
const CaseStudyActiveInactive = API_EP_BOOK.CASESTUDYACTIVE_API_EP;
const PorfolioUpdate = API_EP_BOOK.PORTFOLIOUPDATE_API_EP;
const PorfolioDelete = API_EP_BOOK.PORTFOLIODELETE_API_EP;
const PorfolioSubCategory = API_EP_BOOK.PORTFOLIOSUBCATEGORY_API_EP;

// banner laptop,
const BannerLaptopList = API_EP_BOOK.BANNERLAPTOPLIST_API_EP;
const BannerLaptopCreate = API_EP_BOOK.BANNERLAPTOPCREATE_API_EP;
const BannerLaptopGet = API_EP_BOOK.BANNERLAPTOPGET_API_EP;
const BannerLaptopUpdate = API_EP_BOOK.BANNERLAPTOPUPDATE_API_EP;
const BannerLaptopDelete = API_EP_BOOK.BANNERLAPTOPDELETE_API_EP;
const BannerLaptopActive = API_EP_BOOK.BANNERLAPTOPACTIVE_API_EP;
// banner mobile,
const BannerMobileList = API_EP_BOOK.BANNERMOBILELIST_API_EP;
const BannerMobileCreate = API_EP_BOOK.BANNERMOBILECREATE_API_EP;
const BannerMobileGet = API_EP_BOOK.BANNERMOBILEGET_API_EP;
const BannerMobileUpdate = API_EP_BOOK.BANNERMOBILEUPDATE_API_EP;
const BannerMobileDelete = API_EP_BOOK.BANNERMOBILEDELETE_API_EP;
const BannerMobileActive = API_EP_BOOK.BANNERMOBILEACTIVE_API_EP;
// ourteam,
const OurTeamPlayersList = API_EP_BOOK.OURTEAMPLAYERSLIST_API_EP;
const OurTeamPlayersCreate = API_EP_BOOK.OURTEAMPLAYERSCREATE_API_EP;
const OurTeamPlayersGet = API_EP_BOOK.OURTEAMPLAYERSGET_API_EP;
const OurTeamPlayersUpdate = API_EP_BOOK.OURTEAMPLAYERSUPDATE_API_EP;
const OurTeamPlayersDelete = API_EP_BOOK.OURTEAMPLAYERSDELETE_API_EP;
const OurTeamPlayersActive = API_EP_BOOK.OURTEAMPLAYERSACTIVE_API_EP;
// ourClients,
const OurClientList = API_EP_BOOK.OURCLIENTLIST_API_EP;
const OurClientCreate = API_EP_BOOK.OURCLIENTCREATE_API_EP;
const OurClientDelete = API_EP_BOOK.OURCLIENTDELETE_API_EP;

// service,
const ServiceList = API_EP_BOOK.SERVICELIST_API_EP;
const ServiceCreate = API_EP_BOOK.SERVICECREATE_API_EP;
const ServiceGet = API_EP_BOOK.SERVICEGET_API_EP;
const ServiceUpdate = API_EP_BOOK.SERVICEUPDATE_API_EP;
const ServiceDelete = API_EP_BOOK.SERVICEDELETE_API_EP;
const ServiceActive = API_EP_BOOK.SERVICEACTIVE_API_EP;

// happy moments,
const HappyMomentList = API_EP_BOOK.HAPPYMOMENTLIST_API_EP;
const HappyMomentCreate = API_EP_BOOK.HAPPYMOMENTCREATE_API_EP;
const HappyMomentDelete = API_EP_BOOK.HAPPYMOMENTDELETE_API_EP;

// contactus,

const ContactUsList = API_EP_BOOK.CONTACTUSLIST_API_EP;
const ContactUsGet = API_EP_BOOK.CONTACTUSGET_API_EP;
const ContactUsDelete = API_EP_BOOK.CONTACTUSDELETE_API_EP;

// choose,
const ChooseusList = API_EP_BOOK.CHOOSEUSLIST_API_EP;
const ChooseusCreate = API_EP_BOOK.CHOOSEUSCREATE_API_EP;
const ChooseusGet = API_EP_BOOK.CHOOSEUSGET_API_EP;
const ChooseusUpdate = API_EP_BOOK.CHOOSEUSUPDATE_API_EP;
const ChooseusDelete = API_EP_BOOK.CHOOSEUSDELETE_API_EP;
const ChooseusActive = API_EP_BOOK.CHOOSEUSACTIVE_API_EP;

// leadership,

const LeaderShipList = API_EP_BOOK.LEADERSHIPLIST_API_EP;
const LeaderShipCreate = API_EP_BOOK.LEADERSHIPCREATE_API_EP;
const LeaderShipGet = API_EP_BOOK.LEADERSHIPGET_API_EP;
const LeaderShipUpdate = API_EP_BOOK.LEADERSHIPUPDATE_API_EP;
const LeaderShipDelete = API_EP_BOOK.LEADERSHIPDELETE_API_EP;
const LeaderShipActive = API_EP_BOOK.LEADERSHIPACTIVE_API_EP;

// portfolio category

const CategoryPortfolioList = API_EP_BOOK.CATEGORYPORTFOLIOLIST_API_EP;
const CategoryPortfolioCreate = API_EP_BOOK.CATEGORYPORTFOLIOCREATE_API_EP;
const CategoryPortfolioGet = API_EP_BOOK.CATEGORYPORTFOLIOGET_API_EP;
const CategoryPortfolioUpdate = API_EP_BOOK.CATEGORYPORTFOLIOUPDATE_API_EP;
const CategoryPortfolioDelete = API_EP_BOOK.CATEGORYPORTFOLIODELETE_API_EP;
const CategoryPortfolioActive = API_EP_BOOK.CATEGORYPORTFOLIOACTIVE_API_EP;

// count,
const CountDash = API_EP_BOOK.COUNTDASH_API_EP;

// portfolio category

const ProductsList = API_EP_BOOK.PRODUCTSLIST_API_EP;
const ProductsCreate = API_EP_BOOK.PRODUCTSCREATE_API_EP;
const ProductsGet = API_EP_BOOK.PRODUCTSGET_API_EP;
const ProductsUpdate = API_EP_BOOK.PRODUCTSUPDATE_API_EP;
const ProductsDelete = API_EP_BOOK.PRODUCTSDELETE_API_EP;
const ProductsActive = API_EP_BOOK.PRODUCTSACTIVE_API_EP;

// product gallery,

const ProductGalleryGet = API_EP_BOOK.PRODUCTGALLERYGET_API_EP;
const ProductGalleryUpdate = API_EP_BOOK.PRODUCTGALLERYCREATE_API_EP;
const ProductGalleryDelete = API_EP_BOOK.PRODUCTGALLERYDELETE_API_EP;

const LoginAPI = {
  signOutAPI: function () {
    const getResponse = API(AdminLogout);
    return getResponse;
  },

  countDashList: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(CountDash, requestAPIData);
    return getResponse;
  },
  casestudyCategoryList: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(CaseCategory, requestAPIData);
    return getResponse;
  },
  casestudyPlatformList: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(CasePlatform, requestAPIData);
    return getResponse;
  },
  caseStudyList: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(CaseStudyList, requestAPIData);
    return getResponse;
  },
  caseStudyCreate: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(CaseStudyCreate, requestAPIData);
    return getResponse;
  },
  caseStudyGet: function (id) {
    const url = CaseStudyGet.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: CaseStudyGet.method,
      authorization: CaseStudyGet.authorization,
    };
    return API(requestAPIData);
  },
  caseStudyUpdate: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(CaseStudyUpdate, requestAPIData);
    return getResponse;
  },
  caseStudyDeleteAPI: function (id) {
    const url = CaseStudyDelete.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: CaseStudyDelete.method,
      authorization: CaseStudyDelete.authorization,
    };
    return API(requestAPIData);
  },
  caseStudyShowHome: function (id) {
    const url = CaseStudyShowHome.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: CaseStudyShowHome.method,
      authorization: CaseStudyShowHome.authorization,
    };
    return API(requestAPIData);
  },

  // casestudylgallery,

  caseStudyGalleryGet: function (id) {
    const url = CaseStudyGalleryGet.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: CaseStudyGalleryGet.method,
      authorization: CaseStudyGalleryGet.authorization,
    };
    return API(requestAPIData);
  },

  caseStudyGalleryUpdate: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(CaseStudyGalleryUpdate, requestAPIData);
    return getResponse;
  },
  caseStudyGalleryDeleteAPI: function (id) {
    const url = CaseStudyGalleryDelete.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: CaseStudyGalleryDelete.method,
      authorization: CaseStudyGalleryDelete.authorization,
    };
    return API(requestAPIData);
  },

  // portfolio list,

  PortfolioList: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(PorfolioList, requestAPIData);
    return getResponse;
  },
  PortfolioCreate: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(PorfolioCreate, requestAPIData);
    return getResponse;
  },
  PortfolioGet: function (id) {
    const url = PorfolioGet.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: PorfolioGet.method,
      authorization: PorfolioGet.authorization,
    };
    return API(requestAPIData);
  },
  PortfolioUpdate: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(PorfolioUpdate, requestAPIData);
    return getResponse;
  },
  PortfolioDelete: function (id) {
    const url = PorfolioDelete.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: PorfolioDelete.method,
      authorization: PorfolioDelete.authorization,
    };
    return API(requestAPIData);
  },
  porfolioSubCategoryList: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(PorfolioSubCategory, requestAPIData);
    return getResponse;
  },

  PortfolioActive: function (id) {
    const url = PorfolioActiveInactive.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: PorfolioActiveInactive.method,
      authorization: PorfolioActiveInactive.authorization,
    };
    return API(requestAPIData);
  },
  PortfolioActive: function (id) {
    const url = PorfolioActiveInactive.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: PorfolioActiveInactive.method,
      authorization: PorfolioActiveInactive.authorization,
    };
    return API(requestAPIData);
  },
  CaseStudyActive: function (id) {
    const url = CaseStudyActiveInactive.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: CaseStudyActiveInactive.method,
      authorization: CaseStudyActiveInactive.authorization,
    };
    return API(requestAPIData);
  },

  // banner laptop,

  bannerLaptopList: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(BannerLaptopList, requestAPIData);
    return getResponse;
  },
  bannerLaptopCreate: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(BannerLaptopCreate, requestAPIData);
    return getResponse;
  },
  bannerLaptopGet: function (id) {
    const url = BannerLaptopGet.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: BannerLaptopGet.method,
      authorization: BannerLaptopGet.authorization,
    };
    return API(requestAPIData);
  },
  bannerLaptopUpdate: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(BannerLaptopUpdate, requestAPIData);
    return getResponse;
  },
  bannerLaptopDeleteAPI: function (id) {
    const url = BannerLaptopDelete.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: BannerLaptopDelete.method,
      authorization: BannerLaptopDelete.authorization,
    };
    return API(requestAPIData);
  },
  bannerLaptopActive: function (id) {
    const url = BannerLaptopActive.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: BannerLaptopActive.method,
      authorization: BannerLaptopActive.authorization,
    };
    return API(requestAPIData);
  },

  // banner Mobile,

  bannerMobileList: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(BannerMobileList, requestAPIData);
    return getResponse;
  },
  bannerMobileCreate: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(BannerMobileCreate, requestAPIData);
    return getResponse;
  },
  bannerMobileGet: function (id) {
    const url = BannerMobileGet.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: BannerMobileGet.method,
      authorization: BannerMobileGet.authorization,
    };
    return API(requestAPIData);
  },
  bannerMobileUpdate: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(BannerMobileUpdate, requestAPIData);
    return getResponse;
  },
  bannerMobileDeleteAPI: function (id) {
    const url = BannerMobileDelete.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: BannerMobileDelete.method,
      authorization: BannerMobileDelete.authorization,
    };
    return API(requestAPIData);
  },
  bannerMobileActive: function (id) {
    const url = BannerMobileActive.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: BannerMobileActive.method,
      authorization: BannerMobileActive.authorization,
    };
    return API(requestAPIData);
  },

  // our-team,

  ourTeamPlayersList: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(OurTeamPlayersList, requestAPIData);
    return getResponse;
  },
  ourTeamPlayersCreate: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(OurTeamPlayersCreate, requestAPIData);
    return getResponse;
  },
  ourTeamPlayersGet: function (id) {
    const url = OurTeamPlayersGet.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: OurTeamPlayersGet.method,
      authorization: OurTeamPlayersGet.authorization,
    };
    return API(requestAPIData);
  },
  ourTeamPlayersUpdate: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(OurTeamPlayersUpdate, requestAPIData);
    return getResponse;
  },
  ourTeamPlayersDeleteAPI: function (id) {
    const url = OurTeamPlayersDelete.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: OurTeamPlayersDelete.method,
      authorization: OurTeamPlayersDelete.authorization,
    };
    return API(requestAPIData);
  },
  ourTeamPlayersActive: function (id) {
    const url = OurTeamPlayersActive.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: OurTeamPlayersActive.method,
      authorization: OurTeamPlayersActive.authorization,
    };
    return API(requestAPIData);
  },
  // ourclients,
  ourclientList: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(OurClientList, requestAPIData);
    return getResponse;
  },
  ourClientCreate: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(OurClientCreate, requestAPIData);
    return getResponse;
  },
  ourclientDeleteAPI: function (id) {
    const url = OurClientDelete.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: OurClientDelete.method,
      authorization: OurClientDelete.authorization,
    };
    return API(requestAPIData);
  },
  // service,

  seriveList: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(ServiceList, requestAPIData);
    return getResponse;
  },
  seriveCreate: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(ServiceCreate, requestAPIData);
    return getResponse;
  },
  seriveGet: function (id) {
    const url = ServiceGet.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: ServiceGet.method,
      authorization: ServiceGet.authorization,
    };
    return API(requestAPIData);
  },
  seriveUpdate: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(ServiceUpdate, requestAPIData);
    return getResponse;
  },
  seriveDeleteAPI: function (id) {
    const url = ServiceDelete.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: ServiceDelete.method,
      authorization: ServiceDelete.authorization,
    };
    return API(requestAPIData);
  },
  seriveActive: function (id) {
    const url = ServiceActive.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: ServiceActive.method,
      authorization: ServiceActive.authorization,
    };
    return API(requestAPIData);
  },

  // Happy moments,

  happyList: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(HappyMomentList, requestAPIData);
    return getResponse;
  },
  happyCreate: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(HappyMomentCreate, requestAPIData);
    return getResponse;
  },
  happyDeleteAPI: function (id) {
    const url = HappyMomentDelete.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: HappyMomentDelete.method,
      authorization: HappyMomentDelete.authorization,
    };
    return API(requestAPIData);
  },

  // contact us,

  contactUsList: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(ContactUsList, requestAPIData);
    return getResponse;
  },
  contactUsGet: function (id) {
    const url = ContactUsGet.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: ContactUsGet.method,
      authorization: ContactUsGet.authorization,
    };
    return API(requestAPIData);
  },
  contactUsDeleteAPI: function (id) {
    const url = ContactUsDelete.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: ContactUsDelete.method,
      authorization: ContactUsDelete.authorization,
    };
    return API(requestAPIData);
  },

  // chooseus,

  chooseUsList: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(ChooseusList, requestAPIData);
    return getResponse;
  },
  chooseUsCreate: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(ChooseusCreate, requestAPIData);
    return getResponse;
  },
  chooseUsGet: function (id) {
    const url = ChooseusGet.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: ChooseusGet.method,
      authorization: ChooseusGet.authorization,
    };
    return API(requestAPIData);
  },
  chooseUsUpdate: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(ChooseusUpdate, requestAPIData);
    return getResponse;
  },
  chooseUsDeleteAPI: function (id) {
    const url = ChooseusDelete.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: ChooseusDelete.method,
      authorization: ChooseusDelete.authorization,
    };
    return API(requestAPIData);
  },
  chooseUsActive: function (id) {
    const url = ChooseusActive.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: ChooseusActive.method,
      authorization: ChooseusActive.authorization,
    };
    return API(requestAPIData);
  },

  // leadership,

  leaderShipList: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(LeaderShipList, requestAPIData);
    return getResponse;
  },
  leaderShipCreate: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(LeaderShipCreate, requestAPIData);
    return getResponse;
  },
  leaderShipGet: function (id) {
    const url = LeaderShipGet.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: LeaderShipGet.method,
      authorization: LeaderShipGet.authorization,
    };
    return API(requestAPIData);
  },
  leaderShipUpdate: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(LeaderShipUpdate, requestAPIData);
    return getResponse;
  },
  leaderShipDeleteAPI: function (id) {
    const url = LeaderShipDelete.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: LeaderShipDelete.method,
      authorization: LeaderShipDelete.authorization,
    };
    return API(requestAPIData);
  },
  leaderShipActive: function (id) {
    const url = LeaderShipActive.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: LeaderShipActive.method,
      authorization: LeaderShipActive.authorization,
    };
    return API(requestAPIData);
  },

  // portfolio category,

   categoryPortfolioList: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(CategoryPortfolioList, requestAPIData);
    return getResponse;
  },
  categoryPortfolioCreate: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(CategoryPortfolioCreate, requestAPIData);
    return getResponse;
  },
  categoryPortfolioGet: function (id) {
    const url = CategoryPortfolioGet.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: CategoryPortfolioGet.method,
      authorization: CategoryPortfolioGet.authorization,
    };
    return API(requestAPIData);
  },
  categoryPortfolioUpdate: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(CategoryPortfolioUpdate, requestAPIData);
    return getResponse;
  },
  categoryPortfolioDeleteAPI: function (id) {
    const url = CategoryPortfolioDelete.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: CategoryPortfolioDelete.method,
      authorization: CategoryPortfolioDelete.authorization,
    };
    return API(requestAPIData);
  },
  categoryPortfolioActive: function (id) {
    const url = CategoryPortfolioActive.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: CategoryPortfolioActive.method,
      authorization: CategoryPortfolioActive.authorization,
    };
    return API(requestAPIData);
  },

  // platform casestudy,

   caseStudyPlatformSubList: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(CaseStudyPlatformList, requestAPIData);
    return getResponse;
  },
  caseStudyPlatformSubCreate: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(CaseStudyPlatformCreate, requestAPIData);
    return getResponse;
  },
  caseStudyPlatformSubGet: function (id) {
    const url = CaseStudyPlatformGet.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: CaseStudyPlatformGet.method,
      authorization: CaseStudyPlatformGet.authorization,
    };
    return API(requestAPIData);
  },
  caseStudyPlatformSubUpdate: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(CaseStudyPlatformUpdate, requestAPIData);
    return getResponse;
  },
  caseStudyPlatformSubDeleteAPI: function (id) {
    const url = CaseStudyPlatformDelete.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: CaseStudyPlatformDelete.method,
      authorization: CaseStudyPlatformDelete.authorization,
    };
    return API(requestAPIData);
  },

   // Products,

   productsList: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(ProductsList, requestAPIData);
    return getResponse;
  },
  productsCreate: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(ProductsCreate, requestAPIData);
    return getResponse;
  },
  productsGet: function (id) {
    const url = ProductsGet.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: ProductsGet.method,
      authorization: ProductsGet.authorization,
    };
    return API(requestAPIData);
  },
  productsUpdate: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(ProductsUpdate, requestAPIData);
    return getResponse;
  },
  productsDeleteAPI: function (id) {
    const url = ProductsDelete.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: ProductsDelete.method,
      authorization: ProductsDelete.authorization,
    };
    return API(requestAPIData);
  },
  productsActive: function (id) {
    const url = ProductsActive.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: ProductsActive.method,
      authorization: ProductsActive.authorization,
    };
    return API(requestAPIData);
  },

   // product gallery,

  productGalleryGet: function (id) {
    const url = ProductGalleryGet.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: ProductGalleryGet.method,
      authorization: ProductGalleryGet.authorization,
    };
    return API(requestAPIData);
  },

  productGalleryUpdate: function (apiData) {
    const requestAPIData = {
      bodyData: apiData,
    };
    const getResponse = API(ProductGalleryUpdate, requestAPIData);
    return getResponse;
  },
  productGalleryDeleteAPI: function (id) {
    const url = ProductGalleryDelete.url.replace(":id", id);
    const requestAPIData = {
      url: url,
      method: ProductGalleryDelete.method,
      authorization: ProductGalleryDelete.authorization,
    };
    return API(requestAPIData);
  },
};

export default LoginAPI;
