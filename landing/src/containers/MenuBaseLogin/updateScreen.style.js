import styled from "styled-components";

const SectionWrapper = styled.section`
  padding: 0px 0 80px 0;
  @media (max-width: 990px) {
    padding: 0px 0 80px 0;
  }
  @media (max-width: 575px) {
    padding: 0px 0 60px 0;
  }

  .card {
    height: 100%;
    max-height: 605px;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #fff;
    @media (max-width: 575px) {
      height: 100%;
      max-height: 760px;
    }
  }
  .card-full {
    height: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    background-color: #fff;
    @media (max-width: 575px) {
      height: 100%;
    }
  }

  @keyframes ScaleInUp {
    from {
      opacity: 0;
      transform: translateY(30px) scale(0.97);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  .update-screen-tab {
    border: 0;

    overflow: initial;
    .rc-tabs-ink-bar {
      display: none !important;
    }
    .rc-tabs-bar {
      border: 0;
    }
    .rc-tabs-nav-container {
      margin-bottom: 40px;
      @media (max-width: 767px) {
        margin-bottom: 0;
      }
      
      &:not(.rc-tabs-nav-container-scrolling) {
        .rc-tabs-nav-scroll {
          width: 100%;

          text-align: center;
          .rc-tabs-nav {
            float: none;
            display: block;
            .rc-tabs-tab {
              display: inline-block;
              float: none;
            }
          }
        }
      }
      .rc-tabs-tab {
        font-size: 30px;
        color: #323d47;
        font-weight: 400;
        min-width: 230px;
        padding: 0 0 27px 0;
        text-align: center;
        margin-right: 20px;
        transition: 0.25s ease-in-out;
        &:hover {
          color: #fff;
        }
        &:last-child {
          margin-right: 0;
        }
        &:before,
        &:after {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: 0;
          left: 0;
          display: block;
          @media (max-width: 767px) {
            display: none;
          }
        }
        &:before {
          background: rgba(0, 0, 0, 0.08);
        }
        &:after {
          background: #fff;
          transform: scaleX(0);
          transform-origin: right center 0;
          transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;
        }
        &.rc-tabs-tab-active {
          color: grey;
          font-size: 30px;
          &:after {
            transform: scaleX(1);
            transform-origin: left center 0;
            transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);
          }
        }
        > div {
          margin-right: 8px;
        }
        @media (max-width: 1199px) {
          font-size: 16px;
          padding: 0 0 20px 0;
          min-width: 170px;
        }
        @media (max-width: 990px) {
          min-width: auto;
          padding: 0 10px 15px 10px;
        }
        @media (max-width: 767px) {
          font-size: 14px;
          padding: 0;
          svg {
            width: 20px;
          }
        }
      }
      @media (max-width: 767px) {
        margin-bottom: 0;
      }

    }
    .rc-tabs-content {
      .rc-tabs-tabpane {
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0px 5px 60px 0px rgba(27, 67, 111, 0.15);
        &.rc-tabs-tabpane-active {
          animation: 0.7s ScaleInUp;
        }
        > img {
          max-width: 100%;
          height: auto;
          display: block;
        }
      }
    }
  }

  .rc-tabs-tab-prev-icon,
  .rc-tabs-tab-next-icon {
    font-size: 20px;
    color: #323d47;
    line-height: 1;
    display: block;
  }
`;

export default SectionWrapper;
