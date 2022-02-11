/**
 * @fileoverview gRPC-Web generated client stub for offerpb
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.offerpb = require('./offer_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.offerpb.OfferClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.offerpb.OfferPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.offerpb.GetOfferStreamRequest,
 *   !proto.offerpb.GetOfferStreamResponse>}
 */
const methodDescriptor_Offer_GetOfferStream = new grpc.web.MethodDescriptor(
  '/offerpb.Offer/GetOfferStream',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.offerpb.GetOfferStreamRequest,
  proto.offerpb.GetOfferStreamResponse,
  /**
   * @param {!proto.offerpb.GetOfferStreamRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.offerpb.GetOfferStreamResponse.deserializeBinary
);


/**
 * @param {!proto.offerpb.GetOfferStreamRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.offerpb.GetOfferStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.offerpb.OfferClient.prototype.getOfferStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/offerpb.Offer/GetOfferStream',
      request,
      metadata || {},
      methodDescriptor_Offer_GetOfferStream);
};


/**
 * @param {!proto.offerpb.GetOfferStreamRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.offerpb.GetOfferStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.offerpb.OfferPromiseClient.prototype.getOfferStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/offerpb.Offer/GetOfferStream',
      request,
      metadata || {},
      methodDescriptor_Offer_GetOfferStream);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.offerpb.GetOfferDetailsRequest,
 *   !proto.offerpb.GetOfferDetailsResponse>}
 */
const methodDescriptor_Offer_GetOfferDetails = new grpc.web.MethodDescriptor(
  '/offerpb.Offer/GetOfferDetails',
  grpc.web.MethodType.UNARY,
  proto.offerpb.GetOfferDetailsRequest,
  proto.offerpb.GetOfferDetailsResponse,
  /**
   * @param {!proto.offerpb.GetOfferDetailsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.offerpb.GetOfferDetailsResponse.deserializeBinary
);


/**
 * @param {!proto.offerpb.GetOfferDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.offerpb.GetOfferDetailsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.offerpb.GetOfferDetailsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.offerpb.OfferClient.prototype.getOfferDetails =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/offerpb.Offer/GetOfferDetails',
      request,
      metadata || {},
      methodDescriptor_Offer_GetOfferDetails,
      callback);
};


/**
 * @param {!proto.offerpb.GetOfferDetailsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.offerpb.GetOfferDetailsResponse>}
 *     Promise that resolves to the response
 */
proto.offerpb.OfferPromiseClient.prototype.getOfferDetails =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/offerpb.Offer/GetOfferDetails',
      request,
      metadata || {},
      methodDescriptor_Offer_GetOfferDetails);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.offerpb.UpdatePartnerTotalOrderRequest,
 *   !proto.offerpb.UpdatePartnerTotalOrderResponse>}
 */
const methodDescriptor_Offer_UpdatePartnerTotalOrder = new grpc.web.MethodDescriptor(
  '/offerpb.Offer/UpdatePartnerTotalOrder',
  grpc.web.MethodType.UNARY,
  proto.offerpb.UpdatePartnerTotalOrderRequest,
  proto.offerpb.UpdatePartnerTotalOrderResponse,
  /**
   * @param {!proto.offerpb.UpdatePartnerTotalOrderRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.offerpb.UpdatePartnerTotalOrderResponse.deserializeBinary
);


/**
 * @param {!proto.offerpb.UpdatePartnerTotalOrderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.offerpb.UpdatePartnerTotalOrderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.offerpb.UpdatePartnerTotalOrderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.offerpb.OfferClient.prototype.updatePartnerTotalOrder =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/offerpb.Offer/UpdatePartnerTotalOrder',
      request,
      metadata || {},
      methodDescriptor_Offer_UpdatePartnerTotalOrder,
      callback);
};


/**
 * @param {!proto.offerpb.UpdatePartnerTotalOrderRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.offerpb.UpdatePartnerTotalOrderResponse>}
 *     Promise that resolves to the response
 */
proto.offerpb.OfferPromiseClient.prototype.updatePartnerTotalOrder =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/offerpb.Offer/UpdatePartnerTotalOrder',
      request,
      metadata || {},
      methodDescriptor_Offer_UpdatePartnerTotalOrder);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.offerpb.UpdatePartnerRatingRequest,
 *   !proto.offerpb.UpdatePartnerRatingResponse>}
 */
const methodDescriptor_Offer_UpdatePartnerRating = new grpc.web.MethodDescriptor(
  '/offerpb.Offer/UpdatePartnerRating',
  grpc.web.MethodType.UNARY,
  proto.offerpb.UpdatePartnerRatingRequest,
  proto.offerpb.UpdatePartnerRatingResponse,
  /**
   * @param {!proto.offerpb.UpdatePartnerRatingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.offerpb.UpdatePartnerRatingResponse.deserializeBinary
);


/**
 * @param {!proto.offerpb.UpdatePartnerRatingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.offerpb.UpdatePartnerRatingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.offerpb.UpdatePartnerRatingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.offerpb.OfferClient.prototype.updatePartnerRating =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/offerpb.Offer/UpdatePartnerRating',
      request,
      metadata || {},
      methodDescriptor_Offer_UpdatePartnerRating,
      callback);
};


/**
 * @param {!proto.offerpb.UpdatePartnerRatingRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.offerpb.UpdatePartnerRatingResponse>}
 *     Promise that resolves to the response
 */
proto.offerpb.OfferPromiseClient.prototype.updatePartnerRating =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/offerpb.Offer/UpdatePartnerRating',
      request,
      metadata || {},
      methodDescriptor_Offer_UpdatePartnerRating);
};


module.exports = proto.offerpb;

