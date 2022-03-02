  // message 1 -- timestamp
  var current_height = $(".chat-w").prop("scrollHeight");
  $("li:nth-child(1)").show("drop", {
      direction: "down",
      easing: 'easeInOutExpo'
    }, 1000,

    // message 2

    function() {
      $("li:nth-child(2)").delay(0).show("drop", {
          direction: "down",
          easing: 'easeInOutCirc'
        }, 1000,

        // message 3

        function() {
          $("li:nth-child(3)").delay(500).show("drop", {
              direction: "down",
              easing: 'easeInOutCirc'
            }, 1000,

            // message 4

            function() {
              $("li:nth-child(4)").delay(500).show("drop", {
                  direction: "down",
                  easing: 'easeInOutCirc'
                }, 1000,

                // message 5

                function() {
                  $("li:nth-child(5)").delay(500).show("drop", {
                    direction: "down",
                    easing: 'easeInOutCirc'
                  }, 1000, function() {
                    $(".chat-w").animate({
                        scrollTop: current_height
                      }, 1000,

                      // message 6

                      function() {
                        $("li:nth-child(6)").delay(500).show("drop", {
                          direction: "down",
                          easing: 'easeInOutCirc'
                        }, 1000, function() {
                          $(".chat-w").animate({
                              scrollTop: current_height
                            }, 1000,

                            // message 7

                            function() {
                              $("li:nth-child(7)").delay(1000).show("drop", {
                                direction: "down",
                                easing: 'easeInOutCirc'
                              }, 1000, function() {
                                $(".chat-w").animate({
                                    scrollTop: current_height
                                  }, 1000,

                                  // message 8

                                  function() {
                                    $("li:nth-child(8)").delay(0).show("drop", {
                                      direction: "down",
                                      easing: 'easeInOutCirc'
                                    }, 1000, function() {
                                      $(".chat-w").animate({
                                          scrollTop: current_height
                                        }, 1000,

                                        // message 9

                                        function() {
                                          $("li:nth-child(9)").delay(500).show("drop", {
                                            direction: "down",
                                            easing: 'easeInOutCirc'
                                          }, 1000, function() {
                                            $(".chat-w").delay(500).animate({
                                              scrollTop: current_height
                                            }, 1000, function() {
                                              $(".chat-w").animate({
                                                  scrollTop: current_height
                                                }, 1000,

                                                // message 10

                                                function() {
                                                  $("li:nth-child(10)").delay(500).show("drop", {
                                                    direction: "down",
                                                    easing: 'easeInOutCirc'
                                                  }, 1000, function() {
                                                    $(".chat-w").delay(500).animate({
                                                      scrollTop: current_height
                                                    }, 1000, function() {
                                                      $(".chat-w").animate({
                                                          scrollTop: current_height
                                                        }, 1000,

                                                        // message 11

                                                        function() {
                                                          $("li:nth-child(11)").delay(500).show("drop", {
                                                            direction: "down",
                                                            easing: 'easeInOutCirc'
                                                          }, 1000, function() {
                                                            $(".chat-w").delay(500).animate({
                                                              scrollTop: current_height
                                                            }, 1000, function() {
                                                              $(".chat-w").animate({
                                                                  scrollTop: current_height
                                                                }, 1000,

                                                                // message 12

                                                                function() {
                                                                  $("li:nth-child(12)").delay(500).show("drop", {
                                                                    direction: "down",
                                                                    easing: 'easeInOutCirc'
                                                                  }, 1000, function() {
                                                                    $(".chat-w").delay(500).animate({
                                                                      scrollTop: current_height
                                                                    }, 1000, function() {
                                                                      $(".chat-w").animate({
                                                                          scrollTop: current_height
                                                                        }, 1000,

                                                                        // message 13

                                                                        function() {
                                                                          $("li:nth-child(13)").delay(500).show("drop", {
                                                                            direction: "down",
                                                                            easing: 'easeInOutCirc'
                                                                          }, 1000, function() {
                                                                            $(".chat-w").delay(500).animate({
                                                                              scrollTop: current_height
                                                                            }, 1000, function() {
                                                                              $(".chat-w").animate({
                                                                                  scrollTop: current_height
                                                                                }, 1000,

                                                                                function() {});
                                                                            });
                                                                          });
                                                                        });
                                                                    });
                                                                  });
                                                                });
                                                            });
                                                          });
                                                        });
                                                    });
                                                  });
                                                });
                                            });
                                          });
                                        });
                                    });
                                  });
                              });
                            });
                        });
                      });
                  });
                });
            });
        });
    });
