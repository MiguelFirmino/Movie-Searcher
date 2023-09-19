export interface Movies {
  results: Array<{
    id: string;
    titleText: {
      text: string;
    };
    releaseYear: {
      year: number;
      endYear: any;
    };
    principalCast: [
      {
        credits: [
          {
            characters: [{ name: string }];
            name: {
              id: string;
              nameText: { text: string };
            };
          }
        ];
      }
    ];
    ratingsSummary: {
      aggregateRating: number;
      voteCount: number;
    };
    primaryImage: {
      url: string;
    };
    genres: {
      genres: [
        {
          text: string;
        }
      ];
    };
  }>;
}
