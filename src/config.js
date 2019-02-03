const dev = {
  STRIPE_KEY: "pk_test_kUjyEclhaRhOXFLEPh7ql9im",
  s3: {
    REGION: "ap-south-1",
    BUCKET: "YOUR_DEV_S3_UPLOADS_BUCKET_NAME"
  },
  apiGateway: {
    REGION: "ap-south-1",
    URL: "https://srql6xdyof.execute-api.ap-south-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "ap-south-1",
    USER_POOL_ID: "ap-south-1_ZsdQwfRFp",
    APP_CLIENT_ID: "6qqr1qg455sc2tumbiaq8mjqfl",
    IDENTITY_POOL_ID: "ap-south-1:557ca8c1-a96b-4896-9dc7-d961c63ba150"
  }

};

const prod = {
  STRIPE_KEY: "pk_test_kUjyEclhaRhOXFLEPh7ql9im",
  s3: {
    REGION: "ap-south-1",
    BUCKET: "YOUR_PROD_S3_UPLOADS_BUCKET_NAME"
  },
  apiGateway: {
    REGION: "ap-south-1",
    URL: " https://8e5nm6sdb5.execute-api.ap-south-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "ap-south-1",
    USER_POOL_ID: "ap-south-1_6GWrTcr2j",
    APP_CLIENT_ID: "5hk4kmhl98jpdrq62s1euomjoj",
    IDENTITY_POOL_ID: "ap-south-1:c2020135-ae4c-4539-a88c-4c6624a2e633"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};