<template>
  <div class="main-box">
    <div class="left-column">
      <img
        class="cover-img"
        :src="require(`../../images/${coverImg}`)"
        alt="campus shoes"
      />
      <div class="img-gallery">
        <img
          @mouseover="activateCover('')"
          :src="require(`../../images/${product.image}.jpg`)"
        />
        <img
          @mouseover="activateCover('_1')"
          :src="require(`../../images/${product.image}_1.jpg`)"
        />
        <img
          @mouseover="activateCover('_2')"
          :src="require(`../../images/${product.image}_2.jpg`)"
        />
        <img
          @mouseover="activateCover('_3')"
          :src="require(`../../images/${product.image}_3.jpg`)"
        />
        <img
          @mouseover="activateCover('_4')"
          :src="require(`../../images/${product.image}_4.jpg`)"
        />
      </div>
    </div>
    <div class="right-column">
      <h2>{{ product.title }}</h2>
      <h3 class="price-heading">Special Price</h3>
      <div class="price-rating">
        <p class="price">₹{{ product.price }}</p>
        <p class="false-price">
          <s>₹{{ product.price + 1000 }}</s>
        </p>
        <star-rating
          class="rating"
          star-size="20"
          :increment="0.5"
          :rating="rating"
          :read-only="true"
        ></star-rating>
      </div>
<base-button class="btn-add" @click="sendToCart">Add to Cart</base-button>
      <p class="details">
        {{product.details}}
        <ul>
          <li>Sole: Thermoplastic Elastomers</li>
    <li>Closure: Lace-Up</li>
    <li>Fit Type: Regular</li>
    <li>Shoe Width: Medium</li>
    <li>Material Type: Mesh</li>
    <li>Lifestyle: Sports</li>
    <li>Warranty Type: Manufacturer</li>
    <li>Care Instructions: Allow your pair of shoes to air and de-odorize at a regular basis, this also helps them retain their natural shape; use shoe bags to prevent any stains or mildew; dust any dry dirt from the surface using a clean cloth, do not use polish or shiner</li>
          </ul> 
      </p>
    </div>
  </div>
</template>
<script setup>
import StarRating from "vue-star-rating";
import { useProductStore } from "@/store/product";
import { defineProps, defineExpose, ref } from "vue";
const props = defineProps({ id: String });
const store = useProductStore();
const product = store.getProductById(props.id);
const coverImg = ref(`${product.image}.jpg`);
const activateCover = (num) => {
  coverImg.value = `${product.image}` + num + ".jpg";
};
const sendToCart = () => {
  store.addToCart(props.id);
};
const rating = product.rating;

defineExpose({ product, activateCover, coverImg });
</script>
<style scoped>
.main-box {
  margin: 1rem 13%;
  display: flex;
  gap: 1rem;
}
.left-column {
  align-self: flex-start;
  position: sticky;
  width: 46%;
  top: 8rem;
}
.cover-img {
  width: 100%;
  height: 39rem;
  object-fit: contain;
}
.img-gallery {
  display: flex;
  width: 100%;
  gap: 0.3rem;
}
.img-gallery img {
  margin-top: 0.5rem;
  width: 100%;
  object-fit: contain;
  border-radius: 7px;
  border: 1px solid rgba(0, 0, 0, 0.367);
  cursor: pointer;
  height: 8rem;
}
.img-gallery img:active {
  border: 2px solid black;
}

.right-column {
  background-color: #edfdfa;
  width: 55%;
  display: flex;
  flex-direction: column;
  padding: 3rem 1rem;
  border-radius: 7px;
}
.right-column h2 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
}
.price-heading {
  color: green;
  font-size: 1.5rem;
  margin-bottom: 0.3rem;
  padding: 0 1.5rem;
}
.price-rating {
  gap: 1.5rem;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  margin-bottom: 2rem;
}
.price {
  font-size: 2.6rem;
  font-weight: 600;
  text-align: center;
}
.false-price {
  font-size: 1.8rem;
}
.btn-add{
  margin: 0 1rem 2rem 0;
}
.details {
  line-height: 1.8;
  padding: 1rem;
  font-size: 1.4rem;
}
.details ul{
  margin-top: 1.6rem;
  margin-left: 1.3rem;
}
.rating {
  margin-left: auto;
  font-size: 1.4rem;
}
.rating-icon {
  width: 12rem;
  display: flex;
}
.filled {
  fill: gold;
}
</style>
