export interface SearchResult {
    ok:          boolean;
    description: SearchResultDescription[];
    error_code:  number;
}

export interface SearchResultDescription {
    "#TITLE":      string;
    "#YEAR":       number;
    "#IMDB_ID":    string;
    "#RANK":       number;
    "#ACTORS":     string;
    "#AKA":        string;
    "#IMDB_URL":   string;
    "#IMDB_IV":    string;
    "#IMG_POSTER": string;
    photo_width:   number;
    photo_height:  number;
}



export interface IMDbIdSearchResult {
    short:  Short;
    imdbId: string;
    top:    Top;
    main:   Main;
    fake:   Fake;
}

export interface Fake {
    "#TITLE":      string;
    "#YEAR":       number;
    "#IMDB_ID":    string;
    "#RANK":       number;
    "#ACTORS":     string;
    "#AKA":        string;
    "#IMDB_URL":   string;
    "#IMDB_IV":    string;
    "#IMG_POSTER": string;
    photo_width:   number;
    photo_height:  number;
}

export interface Main {
    id:                      string;
    wins:                    Companies;
    nominations:             Companies;
    prestigiousAwardSummary: PrestigiousAwardSummary;
    ratingsSummary:          MainRatingsSummary;
    episodes:                null;
    videos:                  Companies;
    videoStrip:              VideoStrip;
    titleMainImages:         TitleMainImages;
    productionStatus:        ProductionStatus;
    primaryImage:            PrimaryImageElement;
    imageUploadLink:         Link;
    titleType:               MainTitleType;
    cast:                    Cast;
    creators:                any[];
    directors:               Director[];
    writers:                 Director[];
    isAdult:                 boolean;
    moreLikeThisTitles:      MoreLikeThisTitles;
    triviaTotal:             Companies;
    trivia:                  Trivia;
    goofsTotal:              Companies;
    goofs:                   CrazyCredits;
    quotesTotal:             Companies;
    quotes:                  Quotes;
    crazyCredits:            CrazyCredits;
    alternateVersions:       AlternateVersions;
    connections:             Connections;
    soundtrack:              Soundtrack;
    titleText:               OriginalTitleText;
    originalTitleText:       OriginalTitleText;
    releaseYear:             AssociatedTitleReleaseYear;
    reviews:                 Companies;
    featuredReviews:         MainFeaturedReviews;
    canRate:                 CanRate;
    iframeAddReviewLink:     Link;
    topQuestions:            TopQuestions;
    faqs:                    Faqs;
    releaseDate:             ReleaseDate;
    countriesOfOrigin:       MainCountriesOfOrigin;
    detailsExternalLinks:    DetailsExternalLinks;
    spokenLanguages:         SpokenLanguages;
    akas:                    Akas;
    filmingLocations:        FilmingLocations;
    production:              Production;
    companies:               Companies;
    productionBudget:        ProductionBudget;
    lifetimeGross:           Gross;
    openingWeekendGross:     OpeningWeekendGross;
    worldwideGross:          Gross;
    technicalSpecifications: TechnicalSpecifications;
    runtime:                 MainRuntime;
    series:                  null;
    canHaveEpisodes:         boolean;
    contributionQuestions:   ContributionQuestions;
    __typename:              MainTypename;
}

export enum MainTypename {
    Title = "Title",
}

export interface Akas {
    edges:      AkasEdge[];
    __typename: string;
}

export interface AkasEdge {
    node:       OriginalTitleText;
    __typename: string;
}

export interface OriginalTitleText {
    text:       string;
    __typename: string;
}

export interface AlternateVersions {
    total:      number;
    edges:      AlternateVersionsEdge[];
    __typename: string;
}

export interface AlternateVersionsEdge {
    node:       PurpleNode;
    __typename: string;
}

export interface PurpleNode {
    text:       OriginalTextElement;
    __typename: string;
}

export interface OriginalTextElement {
    plaidHtml:  string;
    __typename: OriginalTextTypename;
}

export enum OriginalTextTypename {
    Markdown = "Markdown",
}

export interface CanRate {
    isRatable:  boolean;
    __typename: CanRateTypename;
}

export enum CanRateTypename {
    CanRate = "CanRate",
}

export interface Cast {
    edges:      CastEdge[];
    __typename: string;
}

export interface CastEdge {
    node:       FluffyNode;
    __typename: PurpleTypename;
}

export enum PurpleTypename {
    CreditEdge = "CreditEdge",
}

export interface FluffyNode {
    name:           Name;
    attributes:     null;
    category:       PrimaryImageElement;
    characters:     NodeCharacter[];
    episodeCredits: EpisodeCredits;
    __typename:     FluffyTypename;
}

export enum FluffyTypename {
    Cast = "Cast",
}

export interface PrimaryImageElement {
    id:         string;
    __typename: string;
}

export interface NodeCharacter {
    name:       string;
    __typename: CharacterTypename;
}

export enum CharacterTypename {
    Character = "Character",
}

export interface EpisodeCredits {
    total:      number;
    yearRange:  null;
    __typename: EpisodeCreditsTypename;
}

export enum EpisodeCreditsTypename {
    EpisodeCastConnection = "EpisodeCastConnection",
}

export interface Name {
    id:            string;
    nameText:      OriginalTitleText;
    primaryImage?: PrimaryImageClass | null;
    __typename:    TentacledTypename;
}

export enum TentacledTypename {
    Name = "Name",
}

export interface PrimaryImageClass {
    url:        string;
    width:      number;
    height:     number;
    __typename: ThumbnailTypename;
}

export enum ThumbnailTypename {
    Image = "Image",
    Thumbnail = "Thumbnail",
}

export interface Companies {
    total:      number;
    __typename: string;
}

export interface Connections {
    edges:      ConnectionsEdge[];
    __typename: string;
}

export interface ConnectionsEdge {
    node:       TentacledNode;
    __typename: string;
}

export interface TentacledNode {
    associatedTitle: Title;
    category:        OriginalTitleText;
    __typename:      string;
}

export interface Title {
    id:                string;
    releaseYear:       AssociatedTitleReleaseYear;
    titleText:         OriginalTitleText;
    originalTitleText: OriginalTitleText;
    series?:           AssociatedTitleSeries;
    __typename:        MainTypename;
}

export interface AssociatedTitleReleaseYear {
    year:       number;
    __typename: ReleaseYearTypename;
}

export enum ReleaseYearTypename {
    YearRange = "YearRange",
}

export interface AssociatedTitleSeries {
    series:     SeriesSeries;
    __typename: string;
}

export interface SeriesSeries {
    titleText:         OriginalTitleText;
    originalTitleText: OriginalTitleText;
    __typename:        MainTypename;
}

export interface ContributionQuestions {
    contributionLink: Link;
    edges:            any[];
    __typename:       string;
}

export interface Link {
    url:        string;
    __typename: string;
}

export interface MainCountriesOfOrigin {
    countries:  Award[];
    __typename: string;
}

export interface Award {
    id:         string;
    text:       string;
    __typename: string;
    event?:     PrimaryImageElement;
}

export interface CrazyCredits {
    edges:      AlternateVersionsEdge[];
    __typename: string;
}

export interface DetailsExternalLinks {
    edges:      DetailsExternalLinksEdge[];
    total:      number;
    __typename: string;
}

export interface DetailsExternalLinksEdge {
    node:       StickyNode;
    __typename: string;
}

export interface StickyNode {
    url:                string;
    label:              string;
    externalLinkRegion: OriginalTitleText | null;
    __typename:         string;
}

export interface Director {
    totalCredits: number;
    category:     OriginalTitleText;
    credits:      Credit[];
    __typename:   string;
}

export interface Credit {
    name:       Name;
    attributes: null;
    __typename: string;
}

export interface Faqs {
    total:      number;
    edges:      FaqsEdge[];
    __typename: string;
}

export interface FaqsEdge {
    node:       IndigoNode;
    __typename: string;
}

export interface IndigoNode {
    id:         string;
    question:   PlotText;
    __typename: string;
}

export interface PlotText {
    plainText:  string;
    __typename: OriginalTextTypename;
}

export interface MainFeaturedReviews {
    edges:      PurpleEdge[];
    __typename: string;
}

export interface PurpleEdge {
    node:       IndecentNode;
    __typename: string;
}

export interface IndecentNode {
    id:             string;
    author:         PurpleAuthor;
    summary:        Summary;
    text:           PurpleText;
    authorRating:   number;
    submissionDate: Date;
    helpfulness:    Helpfulness;
    __typename:     string;
}

export interface PurpleAuthor {
    nickName:   string;
    userId:     string;
    __typename: string;
}

export interface Helpfulness {
    upVotes:    number;
    downVotes:  number;
    __typename: string;
}

export interface Summary {
    originalText: string;
    __typename:   string;
}

export interface PurpleText {
    originalText: OriginalTextElement;
    __typename:   string;
}

export interface FilmingLocations {
    edges:      FilmingLocationsEdge[];
    total:      number;
    __typename: string;
}

export interface FilmingLocationsEdge {
    node:       Category;
    __typename: string;
}

export interface Category {
    text:        string;
    location?:   string;
    attributes?: OriginalTitleText[];
    __typename:  string;
    id?:         string;
}

export interface Gross {
    total:      Total;
    __typename: string;
}

export interface Total {
    amount:     number;
    currency:   string;
    __typename: string;
}

export interface MoreLikeThisTitles {
    edges:      MoreLikeThisTitlesEdge[];
    __typename: string;
}

export interface MoreLikeThisTitlesEdge {
    node:       HilariousNode;
    __typename: StickyTypename;
}

export enum StickyTypename {
    MoreLikeThisEdge = "MoreLikeThisEdge",
}

export interface HilariousNode {
    id:                string;
    titleText:         OriginalTitleText;
    titleType:         NodeTitleType;
    originalTitleText: OriginalTitleText;
    primaryImage:      TopPrimaryImage;
    releaseYear:       NodeReleaseYear;
    ratingsSummary:    NodeRatingsSummary;
    runtime:           MainRuntime;
    certificate:       Certificate;
    canRate:           CanRate;
    titleGenres:       TitleGenres;
    canHaveEpisodes:   boolean;
    __typename:        MainTypename;
}

export interface Certificate {
    rating:     string;
    __typename: CertificateTypename;
}

export enum CertificateTypename {
    Certificate = "Certificate",
}

export interface TopPrimaryImage {
    id:         string;
    width:      number;
    height:     number;
    url:        string;
    caption:    PlotText;
    __typename: ThumbnailTypename;
}

export interface NodeRatingsSummary {
    aggregateRating: number;
    voteCount:       number;
    __typename:      RatingsSummaryTypename;
}

export enum RatingsSummaryTypename {
    RatingsSummary = "RatingsSummary",
}

export interface NodeReleaseYear {
    year:       number;
    endYear:    null;
    __typename: ReleaseYearTypename;
}

export interface MainRuntime {
    seconds:    number;
    __typename: RuntimeTypename;
}

export enum RuntimeTypename {
    Runtime = "Runtime",
}

export interface TitleGenres {
    genres:     Genre[];
    __typename: TitleGenresTypename;
}

export enum TitleGenresTypename {
    TitleGenres = "TitleGenres",
}

export interface Genre {
    genre:      OriginalTitleText;
    __typename: GenreTypename;
}

export enum GenreTypename {
    TitleGenre = "TitleGenre",
}

export interface NodeTitleType {
    id:                  ID;
    text:                Type;
    canHaveEpisodes:     boolean;
    displayableProperty: DisplayableProperty;
    __typename:          TitleTypeTypename;
}

export enum TitleTypeTypename {
    TitleType = "TitleType",
}

export interface DisplayableProperty {
    value:      PlotText;
    __typename: DisplayablePropertyTypename;
}

export enum DisplayablePropertyTypename {
    DisplayableTitleRuntimeProperty = "DisplayableTitleRuntimeProperty",
    DisplayableTitleTypeProperty = "DisplayableTitleTypeProperty",
}

export enum ID {
    Movie = "movie",
}

export enum Type {
    Movie = "Movie",
}

export interface OpeningWeekendGross {
    gross:          Gross;
    weekendEndDate: Date;
    __typename:     string;
}

export interface PrestigiousAwardSummary {
    nominations: number;
    wins:        number;
    award:       Award;
    __typename:  string;
}

export interface Production {
    edges:      ProductionEdge[];
    __typename: string;
}

export interface ProductionEdge {
    node:       AmbitiousNode;
    __typename: string;
}

export interface AmbitiousNode {
    company:    Company;
    __typename: string;
}

export interface Company {
    id:          string;
    companyText: OriginalTitleText;
    __typename:  string;
}

export interface ProductionBudget {
    budget:     Total;
    __typename: string;
}

export interface ProductionStatus {
    currentProductionStage:  CurrentProductionStage;
    productionStatusHistory: ProductionStatusHistory[];
    restriction:             null;
    __typename:              string;
}

export interface CurrentProductionStage {
    id:         string;
    text:       string;
    __typename: string;
}

export interface ProductionStatusHistory {
    status:     CurrentProductionStage;
    __typename: string;
}

export interface Quotes {
    edges:      QuotesEdge[];
    __typename: string;
}

export interface QuotesEdge {
    node:       CunningNode;
    __typename: string;
}

export interface CunningNode {
    lines:      Line[];
    __typename: string;
}

export interface Line {
    characters:     LineCharacter[];
    text:           string;
    stageDirection: string;
    __typename:     string;
}

export interface LineCharacter {
    character:  string;
    name:       PrimaryImageElement;
    __typename: string;
}

export interface MainRatingsSummary {
    topRanking: TopRanking;
    __typename: RatingsSummaryTypename;
}

export interface TopRanking {
    id:         string;
    text:       CategoryElement;
    rank:       number;
    __typename: string;
}

export interface CategoryElement {
    value:      string;
    __typename: CategoryTypename;
}

export enum CategoryTypename {
    LocalizedString = "LocalizedString",
    TitleTypeCategory = "TitleTypeCategory",
}

export interface ReleaseDate {
    day:        number;
    month:      number;
    year:       number;
    country?:   Award;
    __typename: string;
}

export interface Soundtrack {
    edges:      SoundtrackEdge[];
    __typename: string;
}

export interface SoundtrackEdge {
    node:       MagentaNode;
    __typename: string;
}

export interface MagentaNode {
    text:       string;
    comments:   OriginalTextElement[];
    __typename: string;
}

export interface SpokenLanguages {
    spokenLanguages: Award[];
    __typename:      string;
}

export interface TechnicalSpecifications {
    soundMixes:   SoundMixes;
    aspectRatios: AspectRatios;
    colorations:  AspectRatios;
    __typename:   string;
}

export interface AspectRatios {
    items:      Item[];
    __typename: string;
}

export interface Item {
    aspectRatio: string;
    attributes:  any[];
    __typename:  string;
}

export interface SoundMixes {
    items:      Category[];
    __typename: string;
}

export interface TitleMainImages {
    total:      number;
    edges:      TitleMainImagesEdge[];
    __typename: string;
}

export interface TitleMainImagesEdge {
    node:       TopPrimaryImage;
    __typename: IndigoTypename;
}

export enum IndigoTypename {
    ImageEdge = "ImageEdge",
}

export interface MainTitleType {
    id:              ID;
    canHaveEpisodes: boolean;
    __typename:      TitleTypeTypename;
}

export interface TopQuestions {
    total:      number;
    edges:      TopQuestionsEdge[];
    __typename: string;
}

export interface TopQuestionsEdge {
    node:       FriskyNode;
    __typename: string;
}

export interface FriskyNode {
    attributeId: string;
    question:    PlotText;
    __typename:  string;
}

export interface Trivia {
    edges:      TriviaEdge[];
    __typename: string;
}

export interface TriviaEdge {
    node:       MischievousNode;
    __typename: string;
}

export interface MischievousNode {
    text:         OriginalTextElement;
    trademark:    null;
    relatedNames: null;
    __typename:   string;
}

export interface VideoStrip {
    edges:      VideoStripEdge[];
    __typename: string;
}

export interface VideoStripEdge {
    node:       BraggadociousNode;
    __typename: string;
}

export interface BraggadociousNode {
    id:          string;
    contentType: PurpleContentType;
    name:        CategoryElement;
    runtime:     PurpleRuntime;
    thumbnail:   PrimaryImageClass;
    __typename:  string;
}

export interface PurpleContentType {
    displayName: CategoryElement;
    __typename:  string;
}

export interface PurpleRuntime {
    value:      number;
    __typename: string;
}

export interface Short {
    "@context":      string;
    "@type":         Type;
    url:             string;
    name:            string;
    alternateName:   string;
    image:           string;
    description:     string;
    review:          Review;
    aggregateRating: Rating;
    contentRating:   string;
    genre:           string[];
    datePublished:   Date;
    keywords:        string;
    trailer:         Trailer;
    actor:           Tor[];
    director:        Tor[];
    creator:         Tor[];
    duration:        string;
}

export interface Tor {
    "@type": string;
    url:     string;
    name?:   string;
}

export interface Rating {
    "@type":      string;
    ratingCount?: number;
    bestRating:   number;
    worstRating:  number;
    ratingValue:  number;
}

export interface Review {
    "@type":      string;
    itemReviewed: ItemReviewed;
    author:       ReviewAuthor;
    dateCreated:  Date;
    inLanguage:   string;
    name:         string;
    reviewBody:   string;
    reviewRating: Rating;
}

export interface ReviewAuthor {
    "@type": string;
    name:    string;
}

export interface ItemReviewed {
    "@type": Type;
    url:     string;
}

export interface Trailer {
    "@type":      string;
    name:         string;
    embedUrl:     string;
    thumbnail:    TrailerThumbnail;
    thumbnailUrl: string;
    url:          string;
    description:  string;
    duration:     string;
    uploadDate:   Date;
}

export interface TrailerThumbnail {
    "@type":    string;
    contentUrl: string;
}

export interface Top {
    id:                   string;
    productionStatus:     ProductionStatus;
    canHaveEpisodes:      boolean;
    series:               null;
    titleText:            OriginalTitleText;
    titleType:            TopTitleType;
    originalTitleText:    OriginalTitleText;
    certificate:          Certificate;
    releaseYear:          NodeReleaseYear;
    releaseDate:          ReleaseDate;
    runtime:              TopRuntime;
    canRate:              CanRate;
    ratingsSummary:       NodeRatingsSummary;
    meterRanking:         MeterRanking;
    primaryImage:         TopPrimaryImage;
    images:               Images;
    videos:               Companies;
    primaryVideos:        PrimaryVideos;
    externalLinks:        Companies;
    metacritic:           Metacritic;
    keywords:             Keywords;
    genres:               Genres;
    plot:                 Plot;
    plotContributionLink: Link;
    credits:              Companies;
    principalCredits:     PrincipalCredit[];
    reviews:              Companies;
    criticReviewsTotal:   Companies;
    triviaTotal:          Companies;
    engagementStatistics: EngagementStatistics;
    subNavCredits:        Companies;
    subNavReviews:        Companies;
    subNavTrivia:         Companies;
    subNavFaqs:           Companies;
    subNavTopQuestions:   Companies;
    titleGenres:          TitleGenres;
    meta:                 Meta;
    castPageTitle:        CastPageTitle;
    creatorsPageTitle:    any[];
    directorsPageTitle:   DirectorsPageTitle[];
    countriesOfOrigin:    TopCountriesOfOrigin;
    production:           Production;
    featuredReviews:      TopFeaturedReviews;
    __typename:           MainTypename;
}

export interface CastPageTitle {
    edges:      CastPageTitleEdge[];
    __typename: string;
}

export interface CastPageTitleEdge {
    node:       NodeElement;
    __typename: PurpleTypename;
}

export interface NodeElement {
    name:       Name;
    __typename: string;
}

export interface TopCountriesOfOrigin {
    countries:  PrimaryImageElement[];
    __typename: string;
}

export interface DirectorsPageTitle {
    credits:    NodeElement[];
    __typename: string;
}

export interface EngagementStatistics {
    watchlistStatistics: WatchlistStatistics;
    __typename:          string;
}

export interface WatchlistStatistics {
    displayableCount: OriginalTitleText;
    __typename:       string;
}

export interface TopFeaturedReviews {
    edges:      FluffyEdge[];
    __typename: string;
}

export interface FluffyEdge {
    node:       Node1;
    __typename: string;
}

export interface Node1 {
    author:         FluffyAuthor;
    summary:        Summary;
    text:           FluffyText;
    authorRating:   number;
    submissionDate: Date;
    __typename:     string;
}

export interface FluffyAuthor {
    nickName:   string;
    __typename: string;
}

export interface FluffyText {
    originalText: PlotText;
    __typename:   string;
}

export interface Genres {
    genres:     Award[];
    __typename: string;
}

export interface Images {
    total:      number;
    edges:      ImagesEdge[];
    __typename: string;
}

export interface ImagesEdge {
    node:       PrimaryImageElement;
    __typename: IndigoTypename;
}

export interface Keywords {
    total:      number;
    edges:      AkasEdge[];
    __typename: string;
}

export interface Meta {
    canonicalId:       string;
    publicationStatus: string;
    __typename:        string;
}

export interface Metacritic {
    metascore:  Metascore;
    __typename: string;
}

export interface Metascore {
    score:      number;
    __typename: string;
}

export interface MeterRanking {
    currentRank: number;
    rankChange:  RankChange;
    __typename:  string;
}

export interface RankChange {
    changeDirection: string;
    difference:      number;
    __typename:      string;
}

export interface Plot {
    plotText:   PlotText;
    language:   PrimaryImageElement;
    __typename: string;
}

export interface PrimaryVideos {
    edges:      PrimaryVideosEdge[];
    __typename: string;
}

export interface PrimaryVideosEdge {
    node:       Node2;
    __typename: string;
}

export interface Node2 {
    id:                        string;
    createdDate:               Date;
    isMature:                  boolean;
    runtime:                   PurpleRuntime;
    name:                      Description;
    description:               Description;
    timedTextTracks:           TimedTextTrack[];
    recommendedTimedTextTrack: TimedTextTrack | null;
    thumbnail:                 PrimaryImageClass;
    primaryTitle:              Title;
    playbackURLs:              URL[];
    contentType:               FluffyContentType;
    previewURLs:               URL[];
    __typename:                string;
}

export interface FluffyContentType {
    id:          string;
    displayName: CategoryElement;
    __typename:  string;
}

export interface Description {
    value:      string;
    language:   Language;
    __typename: CategoryTypename;
}

export enum Language {
    En = "en",
    EnUS = "en-US",
}

export interface URL {
    displayName:     Description;
    videoMimeType:   string;
    videoDefinition: string;
    url:             string;
    __typename:      string;
}

export interface TimedTextTrack {
    displayName:    Description;
    refTagFragment: string;
    type:           string;
    language:       Language;
    url:            string;
    __typename:     string;
}

export interface PrincipalCredit {
    totalCredits: number;
    category:     Category;
    credits:      Credit[];
    __typename:   string;
}

export interface TopRuntime {
    seconds:             number;
    displayableProperty: DisplayableProperty;
    __typename:          RuntimeTypename;
}

export interface TopTitleType {
    displayableProperty: DisplayableProperty;
    text:                Type;
    id:                  ID;
    isSeries:            boolean;
    isEpisode:           boolean;
    categories:          CategoryElement[];
    canHaveEpisodes:     boolean;
    __typename:          TitleTypeTypename;
}
