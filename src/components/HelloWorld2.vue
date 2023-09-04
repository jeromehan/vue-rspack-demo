<script >
export default {
  props: {
    msg: {
      type: String,
    },
  },
  data: function () {
    return { count: 0 };
  },
};
</script>

<template>
  <div class="container">
    <h1>{{ msg }}</h1>

    <div class="card">
      <button type="button" @click="count++">count is {{ count }}</button>
      <p>
        Edit
        <code>components/HelloWorld.vue</code> to test HMR
      </p>
    </div>

    <p>Check out Rspack which support Vue</p>
    <p>
      Install
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
      in your IDE for a better DX
    </p>
    <p class="read-the-docs">Click on the Rspack and Vue logos to learn more</p>
  </div>
</template>

<style scoped lang="scss">
.item {
  .goodsInfo {
    position: relative;
  }

  .picInfo {
    position: relative;
    width: 341px;
    height: 343px;

    .infoImage {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 16px;
      margin-top: -1px;
    }

    .videoFlag {
      position: absolute;
      top: 16px;
      left: 16px;
      width: 32px;
      height: 32px;
    }
  }

  .desc {
    width: 301px;
    margin: 17px auto 0;
    line-height: 36px;
    max-height: 72px;
    overflow: hidden;
    font-size: 26px;
    color: #1a1919;
  }

  .infoLabels {
    margin-top: 12px;
    margin-left: 20px;
    display: flex;

    .infoLabel {
      height: 20px;
      object-fit: cover;
      margin-right: 12px;
      vertical-align: bottom;
    }
  }

  .priceInfo {
    margin-top: 20px;
    margin-left: 20px;
    font-family: PingFangSC-Semibold, sans-serif;
    font-weight: 600;
    font-size: 34px;
    color: $red-main;
    letter-spacing: -0.5px;
    line-height: 32px;

    span {
      font-family: PingFangSC-Regular, sans-serif;
      font-weight: 400;
      font-size: 24px;
    }
  }

  .u-sec {
    width: 100%;
  }

  .userInfo {
    margin-top: 16px;
    margin-left: 20px;
    height: 28px;
    padding-bottom: 24px;
    display: flex;
    align-items: center;

    .userHeader {
      position: relative;
      width: 28px;
      height: 28px;
      margin-right: 8px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }

      .online {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 8px;
        height: 8px;
        background: #19e6a9;
        border-radius: 50%;
        border: 2px solid #ffffff;
      }
    }

    .location {
      font-size: 20px;
      color: #777777;
    }
  }

  .userLabels {
    position: absolute;
    right: 20px;
    bottom: 28px;
    height: 24px;
    img {
      height: 100%;
    }
  }

  .operationImg {
    width: 341px;
    margin-top: -1px;
    margin-bottom: -1.5px;
    vertical-align: bottom;
    object-fit: cover;
    border-radius: 16px;
  }
}
</style>
